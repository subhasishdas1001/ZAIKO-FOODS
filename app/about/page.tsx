import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About Us | Zaiko Foods",
  description: "Learn the story behind Zaiko Foods — our mission, quality standards, and commitment to customer satisfaction.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our Story"
        subtitle="A premium brand built on street-food roots and an obsession with quality."
        image="https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1800&auto=format&fit=crop"
      />
      <About />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
