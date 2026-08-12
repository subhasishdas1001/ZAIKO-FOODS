import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
// import Testimonials from "@/components/Testimonials";
import Franchise from "@/components/Franchise";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MenuPreview />
      <About />
      <WhyChooseUs />
      <Gallery />
      {/* <Testimonials /> */}
      <Franchise />
      <ContactSection />
    </>
  );
}
