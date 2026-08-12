import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";

const benefits = [
  "Fresh food, made with care",
  "A brand built around quality & consistency",
  "Growing one step at a time",
  "Expanding to new cities in the future",
];

export default function Franchise() {
  return (
    <section className="relative py-24 px-6 md:px-10 overflow-hidden bg-charcoal">
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <Reveal>
          <SectionDivider label="OUR VISION" />
          <h2 className="font-display text-3xl md:text-5xl text-ivory font-bold">
            Building <span className="text-gradient-gold">Zaiko Foods</span> for Tomorrow
          </h2>
          <p className="mt-5 text-ivory/65 font-body max-w-2xl mx-auto leading-relaxed">
            We’re starting with one simple goal — to build a food brand people love and trust. As Zaiko Foods grows,
            we look forward to expanding to new cities and exploring exciting opportunities in the future.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="grid sm:grid-cols-2 gap-4 mt-10 max-w-xl mx-auto text-left">
          {benefits.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <CheckCircle2 className="text-gold shrink-0 mt-0.5" size={20} />
              <span className="text-ivory/75 font-body text-sm">{b}</span>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.25} className="mt-10">
          <a
            href="mailto:franchise@zaikofoods.com"
            className="inline-flex px-8 py-3.5 rounded-full bg-gold-gradient text-ink font-semibold tracking-wide shadow-gold hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Coming Soon
          </a>
        </Reveal>
      </div>
    </section>
  );
}
