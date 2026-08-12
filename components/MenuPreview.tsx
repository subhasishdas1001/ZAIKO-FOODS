"use client";

import { useState } from "react";
import Link from "next/link";
import { menuCategories } from "@/lib/menuData";
import MenuCard from "@/components/MenuCard";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";

export default function MenuPreview() {
  const [active, setActive] = useState(menuCategories[0].id);
  const category = menuCategories.find((c) => c.id === active)!;

  return (
    <section className="bg-ink py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionDivider label="Our Menu" />
          <h2 className="font-display text-3xl md:text-5xl text-ivory font-bold">
            Crafted Favourites, <span className="text-gradient-gold">Made Fresh</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full font-label text-base tracking-wide border transition-all duration-300 ${
                active === cat.id
                  ? "bg-gold-gradient text-ink border-transparent"
                  : "border-white/15 text-ivory/70 hover:border-gold/50 hover:text-gold"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <MenuCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="text-center mt-14">
          <Link
            href="/menu"
            className="inline-flex px-8 py-3.5 rounded-full border border-gold/50 text-ivory font-semibold tracking-wide hover:bg-gold/10 hover:border-gold transition-colors duration-300"
          >
            View Full Menu
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
