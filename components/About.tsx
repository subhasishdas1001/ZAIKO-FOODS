import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section className="bg-bone py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative">
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-card">
            <Image
              src="/COOK.png"
              alt="Chef plating premium food at Zaiko Foods"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 w-40 h-40 rounded-2xl bg-ink glass hidden md:flex flex-col items-center justify-center text-center p-4 shadow-gold">
            <span className="font-display text-3xl text-gold font-bold">1+</span>
            <span className="font-label text-ivory/80 text-sm mt-1">Years of Craft</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <SectionDivider label="OUR PHILOSOPHY" light />
          <h2 className="font-display text-3xl md:text-5xl text-ink font-bold leading-tight">
             Premium Food, <span className="text-gold-deep bg-clip-text">Elevated</span>
          </h2>
          <p className="mt-6 text-ink/70 font-body leading-relaxed">
            At Zaiko Foods, we believe great food should do more than satisfy your hunger—it should create lasting memories. Every bite is crafted with fresh ingredients, exceptional quality, and a passion for delivering a truly premium dining experience.
          </p>
          <p className="mt-4 text-ink/70 font-body leading-relaxed">
            Our mission is to give young professionals, families and food lovers a fast, premium
            experience they can trust — food that feels indulgent, served with the speed modern
            life demands.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            {[
              { label: "Fresh Ingredients", value: "Sourced Daily" },
              { label: "Kitchen Standard", value: "Hygiene First" },
              { label: "Made Fresh", value: "Cooked After Every Order" },
              { label: "Premium Quality", value: "No Compromise on Taste" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold pl-4">
                <p className="font-display text-xl text-ink font-bold">{stat.value}</p>
                <p className="font-label text-ink/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
