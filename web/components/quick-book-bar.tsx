"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/utils";
import { services } from "@/lib/static-content";

export function QuickBookBar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!phone.trim()) newErrors.phone = "This field is required. Please input a phone number.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    const selectedService = service || "a service";
    const message = `Hello Russ Nails, I'd like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${selectedService}`;
    window.open(
      buildWhatsAppLink(
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "256762267569",
        message,
      ),
      "_blank",
    );
  }

  return (
    <section className="border-b border-brand-cocoa/10 bg-surface" data-aos="fade-up-soft">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="shell flex flex-col gap-4 py-6 md:flex-row md:items-end md:gap-0"
      >
        {/* Name */}
        <div className="flex flex-1 flex-col gap-1 md:border-r md:border-brand-cocoa/15 md:pr-6">
          <input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
            }}
            className={`w-full border-b bg-transparent pb-2 text-sm text-brand-cocoa placeholder:text-brand-cocoa/45 focus:outline-none ${
              errors.name ? "border-red-400" : "border-brand-cocoa/30 focus:border-brand-cocoa"
            }`}
          />
          {errors.name && (
            <p className="bg-[#fce8e8] px-4 py-3 text-sm text-brand-cocoa">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-1 flex-col gap-1 md:border-r md:border-brand-cocoa/15 md:px-6">
          <input
            type="tel"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
            }}
            className={`w-full border-b bg-transparent pb-2 text-sm text-brand-cocoa placeholder:text-brand-cocoa/45 focus:outline-none ${
              errors.phone ? "border-red-400" : "border-brand-cocoa/30 focus:border-brand-cocoa"
            }`}
          />
          {errors.phone && (
            <p className="bg-[#fce8e8] px-4 py-3 text-sm text-brand-cocoa">{errors.phone}</p>
          )}
        </div>

        {/* Service */}
        <div className="flex flex-1 flex-col gap-1 md:border-r md:border-brand-cocoa/15 md:px-6">
          <div className="relative">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full appearance-none border-b border-brand-cocoa/30 bg-transparent pb-2 pr-6 text-sm text-brand-cocoa/45 focus:border-brand-cocoa focus:text-brand-cocoa focus:outline-none"
            >
              <option value="" disabled>
                Choose a Service
              </option>
              {services.map((s) => (
                <option key={s.slug} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-0 top-1 h-4 w-4 text-brand-cocoa/45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* CTA */}
        <div className="md:pl-6">
          <button
            type="submit"
            className="w-full border border-brand-cocoa/60 bg-surface px-6 py-4 text-[0.68rem] font-semibold tracking-[0.14em] text-brand-cocoa/70 uppercase whitespace-nowrap transition hover:border-brand-cocoa hover:text-brand-cocoa sm:px-10 sm:text-xs sm:tracking-[0.22em] md:w-auto"
          >
            Make an Appointment
          </button>
        </div>
      </form>
    </section>
  );
}
