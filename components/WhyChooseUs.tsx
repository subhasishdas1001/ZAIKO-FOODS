import { Leaf, ShieldCheck, Zap, Wallet, Award, Smile } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";

const features = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily and prepped in-house — nothing sits, nothing is compromised." },
  { icon: ShieldCheck, title: "Hygienic Kitchen", desc: "Certified food-safety standards across every Zaiko kitchen, always." },
  { icon: Zap, title: "Fast Delivery", desc: "From order to doorstep, engineered for speed without cutting corners." },
  { icon: Wallet, title: "Affordable Premium", desc: "A luxury experience priced for everyday indulgence." },
  { icon: Award, title: "Best Taste", desc: "Recipes perfected over years, loved by thousands of regulars." },
  { icon: Smile, title: "Friendly Staff", desc: "Every order handled with warmth, care and genuine hospitality." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionDivider label="Why Zaiko" />
          <h2 className="font-display text-3xl md:text-5xl text-ivory font-bold">
            Why Choose <span className="text-gradient-gold">Zaiko Foods</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="group h-full p-8 rounded-2xl bg-charcoal border border-white/5 hover:border-gold/40 transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold-gradient transition-colors duration-300">
                  <f.icon className="text-gold group-hover:text-ink transition-colors duration-300" size={26} />
                </div>
                <h3 className="font-display text-xl text-ivory mb-2">{f.title}</h3>
                <p className="text-ivory/60 font-body text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
