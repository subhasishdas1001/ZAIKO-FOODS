"use client";

import Image from "next/image";
import { useState } from "react";
import { Heart, Plus, Check } from "lucide-react";
import { motion } from "framer-motion";
import type { MenuItem } from "@/lib/menuData";

export default function MenuCard({ item }: { item: MenuItem }) {
  const [fav, setFav] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group relative rounded-2xl overflow-hidden bg-charcoal border border-white/5 hover:border-gold/40 shadow-card transition-colors duration-300"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

        <span
          className={`absolute top-3 left-3 text-[11px] font-body font-semibold px-2.5 py-1 rounded-full ${
            item.veg ? "bg-emerald-500/15 text-emerald-300 border border-emerald-400/30" : "bg-red-500/15 text-red-300 border border-red-400/30"
          }`}
        >
          {item.veg ? "Veg" : "Non-Veg"}
        </span>

        {item.tag && (
          <span className="absolute top-3 right-12 text-[11px] font-body font-semibold px-2.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30">
            {item.tag}
          </span>
        )}

        <button
          aria-label={fav ? "Remove from favorites" : "Add to favorites"}
          onClick={() => setFav((v) => !v)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
        >
          <Heart size={16} className={fav ? "fill-gold text-gold" : "text-ivory"} />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg text-ivory">{item.name}</h3>
          <span className="font-body font-bold text-gold whitespace-nowrap">₹{item.price}</span>
        </div>
        <p className="mt-2 text-sm text-ivory/60 font-body leading-relaxed line-clamp-2">
          {item.description}
        </p>

        <button
          onClick={handleAdd}
          className={`mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
            added
              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
              : "bg-gold-gradient text-ink hover:scale-[1.02] active:scale-95"
          }`}
        >
          {added ? (
            <>
              <Check size={16} /> Added
            </>
          ) : (
            <>
              <Plus size={16} /> Add to Cart
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
