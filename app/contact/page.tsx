import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Zaiko Foods",
  description: "Get in touch with Zaiko Foods — phone, email, WhatsApp and business hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk"
        subtitle="Questions, feedback, or franchise interest — we're one message away."
        image="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1800&auto=format&fit=crop"
      />
      <ContactSection />
    </>
  );
}
