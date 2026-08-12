import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden flex items-center justify-center">
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src="/manu.mp4" type="video/mp4" />
</video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
      <Reveal className="relative z-10 text-center px-6">
        <p className="font-label uppercase tracking-widest2 text-gold text-sm mb-3">{eyebrow}</p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-ivory">{title}</h1>
        {subtitle && <p className="mt-4 text-ivory/70 font-body max-w-xl mx-auto">{subtitle}</p>}
      </Reveal>
    </section>
  );
}
