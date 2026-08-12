"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";

const images = [
  { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900&auto=format&fit=crop", alt: "Gourmet burger stacked high" },
  { src: "https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=900&auto=format&fit=crop", alt: "Fresh momos in a steamer basket" },
  { src: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=900&auto=format&fit=crop", alt: "Golden fries close up" },
  { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=900&auto=format&fit=crop", alt: "Rolled wrap sliced in half" },
  { src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=900&auto=format&fit=crop", alt: "Chef finishing a plate" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=900&auto=format&fit=crop", alt: "Combo meal tray" },
];

export default function Gallery() {
  return (
    <section className="bg-bone py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionDivider label="Gallery" light />
          <h2 className="font-display text-3xl md:text-5xl text-ink font-bold">
            A Taste of <span className="text-gold-deep">Zaiko</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <Reveal key={img.alt} delay={i * 0.06} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "h-full min-h-[340px]" : "h-[160px] md:h-[200px]"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
