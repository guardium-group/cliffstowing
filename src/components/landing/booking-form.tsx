"use client";

import { ContactForm } from "@/components/contact-form";
import { useBooking } from "@/components/landing/booking-context";
import { siteConfig } from "@/lib/site";

/** The landing page's request form, pre-filled by the picker and Book buttons. */
export function BookingForm() {
  const { preset } = useBooking();
  return (
    <ContactForm
      formName="landing"
      title="Book a tow"
      intro={<>Tell us the vehicle, where it is and what you need. For anything urgent, call {siteConfig.phone.compact}.</>}
      submitLabel="Send booking request"
      preset={preset}
      className="shadow-xl ring-1 ring-gray-100"
    />
  );
}
