import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { calculateSubtotal, createOrderReference, formatUGX } from "@/lib/utils";

export const runtime = "nodejs";

const cartItemSchema = z.object({
  productId: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
  price: z.number().nonnegative(),
  quantity: z.number().int().positive(),
});

const orderPayloadSchema = z.object({
  idempotencyKey: z.string().min(8).max(120),
  checkoutMethod: z.enum(["site", "whatsapp"]),
  status: z.enum(["placed", "whatsapp_inquiry"]),
  customer: z.object({
    fullName: z.string().min(2),
    phone: z.string().min(7),
    email: z.string().email().optional(),
    address: z.string().max(240).optional(),
  }),
  items: z.array(cartItemSchema).min(1),
  totals: z.object({
    subtotal: z.number().nonnegative(),
  }),
  notes: z.string().max(1000).optional(),
});

type ValidOrderPayload = z.infer<typeof orderPayloadSchema>;

type NotificationResult = {
  sent: boolean;
  reason?: string;
};

const idempotencyMap = new Map<string, string>();
const notifiedOrderRefs = new Set<string>();
const MAX_IDEMPOTENCY_KEYS = 500;

function rememberIdempotencyKey(key: string, orderRef: string) {
  if (idempotencyMap.size >= MAX_IDEMPOTENCY_KEYS) {
    const oldest = idempotencyMap.keys().next().value;

    if (oldest) {
      idempotencyMap.delete(oldest);
    }
  }

  idempotencyMap.set(key, orderRef);
}

function shouldNotifyOwner(status: ValidOrderPayload["status"]): boolean {
  if (status === "placed") {
    return true;
  }

  return process.env.ENABLE_WHATSAPP_INQUIRY_EMAIL === "true";
}

function buildNotificationContent(order: ValidOrderPayload, orderRef: string) {
  const itemRows = order.items
    .map(
      (item) =>
        `<tr><td style="padding:4px 0;">${item.name} x${item.quantity}</td><td style="padding:4px 0;text-align:right;">${formatUGX(item.price * item.quantity)}</td></tr>`,
    )
    .join("");

  const subjectPrefix = order.status === "placed" ? "New order placed" : "New WhatsApp inquiry";

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#222;">
      <h2 style="margin-bottom:4px;">${subjectPrefix}</h2>
      <p style="margin-top:0;"><strong>Reference:</strong> ${orderRef}</p>
      <p><strong>Checkout:</strong> ${order.checkoutMethod}</p>
      <p><strong>Customer:</strong> ${order.customer.fullName}</p>
      <p><strong>Phone:</strong> ${order.customer.phone}</p>
      ${order.customer.email ? `<p><strong>Email:</strong> ${order.customer.email}</p>` : ""}
      ${order.customer.address ? `<p><strong>Address:</strong> ${order.customer.address}</p>` : ""}
      ${order.notes ? `<p><strong>Notes:</strong> ${order.notes}</p>` : ""}
      <table style="width:100%;margin-top:16px;border-collapse:collapse;">
        <tbody>${itemRows}</tbody>
      </table>
      <p style="margin-top:16px;"><strong>Subtotal:</strong> ${formatUGX(order.totals.subtotal)}</p>
    </div>
  `;

  const textRows = order.items
    .map((item) => `- ${item.name} x${item.quantity}: ${formatUGX(item.price * item.quantity)}`)
    .join("\n");

  const text = [
    `${subjectPrefix}`,
    `Reference: ${orderRef}`,
    `Checkout: ${order.checkoutMethod}`,
    `Customer: ${order.customer.fullName}`,
    `Phone: ${order.customer.phone}`,
    order.customer.email ? `Email: ${order.customer.email}` : undefined,
    order.customer.address ? `Address: ${order.customer.address}` : undefined,
    order.notes ? `Notes: ${order.notes}` : undefined,
    "",
    "Items:",
    textRows,
    "",
    `Subtotal: ${formatUGX(order.totals.subtotal)}`,
  ]
    .filter(Boolean)
    .join("\n");

  return {
    subject: `${subjectPrefix} - ${orderRef}`,
    html,
    text,
  };
}

async function sendOwnerNotification(
  order: ValidOrderPayload,
  orderRef: string,
): Promise<NotificationResult> {
  if (notifiedOrderRefs.has(orderRef)) {
    return {
      sent: false,
      reason: "duplicate-suppressed",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ORDER_NOTIFICATION_FROM_EMAIL;
  const to = process.env.ORDER_NOTIFICATION_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return {
      sent: false,
      reason: "missing-resend-config",
    };
  }

  const resend = new Resend(apiKey);
  const content = buildNotificationContent(order, orderRef);

  try {
    const sendResult = await resend.emails.send({
      from,
      to: [to],
      subject: content.subject,
      html: content.html,
      text: content.text,
    });

    if (sendResult.error) {
      return {
        sent: false,
        reason: sendResult.error.message,
      };
    }

    notifiedOrderRefs.add(orderRef);

    return {
      sent: true,
    };
  } catch (error) {
    return {
      sent: false,
      reason: error instanceof Error ? error.message : "notification-failed",
    };
  }
}

export async function POST(request: Request) {
  let rawBody: unknown;

  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid JSON payload.",
      },
      { status: 400 },
    );
  }

  const parsed = orderPayloadSchema.safeParse(rawBody);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Invalid order payload.",
        details: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const payload = parsed.data;

  const expectedSubtotal = calculateSubtotal(payload.items);
  if (Math.abs(expectedSubtotal - payload.totals.subtotal) > 0.5) {
    return NextResponse.json(
      {
        ok: false,
        error: "Subtotal mismatch. Please refresh cart and retry.",
      },
      { status: 400 },
    );
  }

  const existingOrderRef = idempotencyMap.get(payload.idempotencyKey);
  if (existingOrderRef) {
    return NextResponse.json({
      ok: true,
      duplicate: true,
      orderRef: existingOrderRef,
      notification: {
        sent: false,
        reason: "duplicate-request",
      },
    });
  }

  const orderRef = createOrderReference("RN");
  rememberIdempotencyKey(payload.idempotencyKey, orderRef);

  const notification = shouldNotifyOwner(payload.status)
    ? await sendOwnerNotification(payload, orderRef)
    : {
        sent: false,
        reason: "status-not-configured",
      };

  return NextResponse.json({
    ok: true,
    duplicate: false,
    orderRef,
    notification,
  });
}
