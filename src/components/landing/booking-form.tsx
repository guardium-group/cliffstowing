"use client";

import { ContactForm } from "@/components/contact-form";
import { useBooking } from "@/components/landing/booking-context";
import { H3 } from "@/components/landing/ui";
import { siteConfig } from "@/lib/site";

/** The landing page's request form, pre-filled by the picker and Book links. */
export function BookingForm() {
  const { preset } = useBooking();
  return (
    <ContactForm
      formName="landing"
      title="Send the details"
      titleAs="h3"
      titleClassName={`${H3} text-gray-950`}
      intro={<>Tell us the vehicle, where it is and what you need. For anything urgent, call {siteConfig.phone.compact}.</>}
      submitLabel="Send booking request"
      preset={preset}
      className="rounded-2xl p-6 sm:p-10 shadow-[0_24px_60px_-28px_rgba(20,10,11,0.35)] ring-1 ring-gray-200"
    />
  );
}
