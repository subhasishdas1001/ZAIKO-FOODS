import type { Metadata } from "next";
import { MapPin, Clock, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Locations | Zaiko Foods",
  description: "Find your nearest Zaiko Foods outlet — timings, addresses and contact details.",
};

const outlets = [
  { city: "SAMBALPUR", area: "SAMBALPUR", hours: "12 AM – 11 PM", phone: "+91 8670479101" },
 
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Find a Zaiko Near You"
        subtitle="Dine in, takeaway, or order for delivery from your nearest outlet."
        image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1800&auto=format&fit=crop"
      />

      <section className="bg-ink py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <SectionDivider label="Outlets" />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {outlets.map((o, i) => (
              <Reveal key={o.area} delay={i * 0.1}>
                <div className="p-7 rounded-2xl bg-charcoal border border-white/5 hover:border-gold/40 transition-colors duration-300">
                  <h3 className="font-display text-xl text-ivory mb-1">{o.area}</h3>
                  <p className="text-gold font-label text-sm mb-4">{o.city}</p>
                  <div className="space-y-2.5 text-sm text-ivory/65 font-body">
                    <p className="flex items-center gap-2"><MapPin size={16} className="text-gold shrink-0" /> {o.area}, {o.city}, Odisha</p>
                    <p className="flex items-center gap-2"><Clock size={16} className="text-gold shrink-0" /> {o.hours}</p>
                    <p className="flex items-center gap-2"><Phone size={16} className="text-gold shrink-0" /> {o.phone}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="rounded-3xl overflow-hidden shadow-card h-[420px]">
            <iframe
              title="Zaiko Foods outlets map"
              src="https://www.google.com/maps?q=Bhubaneswar,Odisha,India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
