import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Gallery | Zaiko Foods",
  description: "A visual taste of Zaiko Foods — premium food photography from our kitchens.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A Visual Feast"
        subtitle="Every dish, shot the way it deserves to be seen."
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1800&auto=format&fit=crop"
      />
      <Gallery />
    </>
  );
}
