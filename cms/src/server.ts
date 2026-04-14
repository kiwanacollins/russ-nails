import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { Readable } from "node:stream";
import type { ReadableStream as NodeReadableStream } from "node:stream/web";
import { handleEndpoints } from "payload";
import payloadConfig from "./payload.config.js";

const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? "0.0.0.0";
const publicServerURL = process.env.PAYLOAD_PUBLIC_SERVER_URL ?? `http://localhost:${port}`;

function toFetchHeaders(nodeHeaders: IncomingMessage["headers"]): Headers {
  const headers = new Headers();

  for (const [key, value] of Object.entries(nodeHeaders)) {
    if (typeof value === "undefined") {
      continue;
    }

    if (Array.isArray(value)) {
      for (const headerValue of value) {
        headers.append(key, headerValue);
      }
      continue;
    }

    headers.set(key, value);
  }

  return headers;
}

async function readRequestBody(request: IncomingMessage): Promise<Buffer | undefined> {
  const method = request.method?.toUpperCase();

  if (method === "GET" || method === "HEAD") {
    return undefined;
  }

  const chunks: Buffer[] = [];

  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  if (chunks.length === 0) {
    return undefined;
  }

  return Buffer.concat(chunks);
}

async function sendFetchResponse(response: Response, nodeResponse: ServerResponse): Promise<void> {
  nodeResponse.statusCode = response.status;

  for (const [key, value] of response.headers.entries()) {
    nodeResponse.setHeader(key, value);
  }

  if (!response.body) {
    nodeResponse.end();
    return;
  }

  const stream = Readable.fromWeb(response.body as unknown as NodeReadableStream);
  stream.on("error", () => {
    nodeResponse.destroy();
  });
  stream.pipe(nodeResponse);
}

const server = createServer(async (request, response) => {
  if (request.url === "/healthz") {
    response.statusCode = 200;
    response.setHeader("content-type", "application/json");
    response.end(JSON.stringify({ ok: true }));
    return;
  }

  try {
    const requestURL = new URL(request.url ?? "/", publicServerURL);
    const rawBody = await readRequestBody(request);
    const body = rawBody ? new Uint8Array(rawBody) : undefined;
    const fetchRequest = new Request(requestURL, {
      method: request.method,
      headers: toFetchHeaders(request.headers),
      body,
    });

    const fetchResponse = await handleEndpoints({
      config: payloadConfig,
      request: fetchRequest,
    });

    await sendFetchResponse(fetchResponse, response);
  } catch (error) {
    console.error("Failed to handle CMS request", error);
    response.statusCode = 500;
    response.setHeader("content-type", "application/json");
    response.end(JSON.stringify({ error: "Internal Server Error" }));
  }
});

server.listen(port, host, () => {
  console.log(`Russ Nails CMS API running on ${publicServerURL}/api`);
});