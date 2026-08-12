import Image from "next/image";
import { Star } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";

const reviews = [
  {
    name: "Ananya Roy",
    role: "College Student",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    quote: "The momos taste like they came from a proper restaurant, not a quick bite. My go-to order every week.",
    rating: 5,
  },
  {
    name: "Rohit Sharma",
    role: "Office Worker",
    photo: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=200&auto=format&fit=crop",
    quote: "Fast delivery, hot food, and the packaging alone feels premium. Zaiko has replaced my lunch routine.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "Parent",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    quote: "Finally a fast-food brand my kids love that I also trust for hygiene. The combo meals are great value.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionDivider label="Testimonials" />
          <h2 className="font-display text-3xl md:text-5xl text-ivory font-bold">
            Loved by <span className="text-gradient-gold">Regulars</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1}>
              <div className="h-full p-8 rounded-2xl bg-charcoal border border-white/5 hover:border-gold/40 transition-colors duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      className={s < r.rating ? "fill-gold text-gold" : "text-white/15"}
                    />
                  ))}
                </div>
                <p className="text-ivory/75 font-body leading-relaxed italic">&ldquo;{r.quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-gold/30">
                    <Image src={r.photo} alt={r.name} fill loading="lazy" className="object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-ivory text-sm">{r.name}</p>
                    <p className="font-label text-ivory/50 text-sm">{r.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
