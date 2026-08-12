import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { menuCategories } from "@/lib/menuData";
import MenuCard from "@/components/MenuCard";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Menu | Zaiko Foods",
  description: "Explore the full Zaiko Foods menu — momos, burgers, rolls, fries, drinks, combos and special offers.",
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="Every Craving, Covered"
        subtitle="Freshly prepared, generously portioned, and finished with the Zaiko signature touch."
        image="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1800&auto=format&fit=crop"
      />

      <section className="bg-ink py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-20">
          {menuCategories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <Reveal className="mb-10">
                <SectionDivider label={cat.name} />
              </Reveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, i) => (
                  <Reveal key={item.id} delay={i * 0.06}>
                    <MenuCard item={item} />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
