import { z } from "zod";

export const serviceOptions = [
  "Light Duty Towing",
  "Heavy Duty Towing",
  "Flatbed Towing",
  "Accident Towing & Recovery",
  "Roadside Assistance",
  "Jump Start / Battery Boost",
  "Fuel Delivery",
  "Winching & Recovery",
  "Equipment Transport",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  services: z.array(z.string()).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
