"use client";

import { useState } from "react";
import { Phone, Mail, MessageCircle, Clock, Send } from "lucide-react";
import SectionDivider from "@/components/SectionDivider";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="bg-bone py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-14">
          <SectionDivider label="Contact" light />
          <h2 className="font-display text-3xl md:text-5xl text-ink font-bold">
            We&apos;d Love to <span className="text-gold-deep">Hear From You</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal className="rounded-3xl overflow-hidden shadow-card h-[420px]">
            <iframe
           title="Zaiko Foods location map"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53760.451554192674!2d83.9728832!3d21.470397999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a21167f047cd9b5%3A0x7660a40be684d655!2sSambalpur%2C%20Odisha!5e1!3m2!1sen!2sin!4v1786522290617!5m2!1sen!2sin"
           width="100%"
           height="100%"
           style={{ border: 0 }}
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
           />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <ContactCard icon={Phone} label="Phone" value="+91 8670479101" href="tel:+8670479101" />
              <ContactCard icon={Mail} label="Email" value="hello@zaikofoods.com" href="mailto:hello@zaikofoods.com" />
              <ContactCard icon={MessageCircle} label="WhatsApp" value="+91 8670479101" href="https://wa.me/8670479101" />
              <ContactCard icon={Clock} label="Hours" value="03 AM – 10.30 PM, Daily" />
            </div>

            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-ink/95 border border-gold/10 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  placeholder="Your Name"
                  className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder:text-ivory/40 font-body focus:border-gold outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder:text-ivory/40 font-body focus:border-gold outline-none"
                />
              </div>
              <textarea
                required
                rows={4}
                placeholder="Your Message"
                className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder:text-ivory/40 font-body focus:border-gold outline-none resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gold-gradient text-ink font-semibold tracking-wide hover:scale-[1.02] active:scale-95 transition-transform duration-300"
              >
                {sent ? "Message Sent" : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="p-5 rounded-2xl bg-ink/95 border border-white/5 hover:border-gold/40 transition-colors duration-300 h-full">
      <Icon className="text-gold mb-2" size={20} />
      <p className="font-label text-ivory/50 text-sm">{label}</p>
      <p className="font-body text-ivory text-sm font-semibold mt-0.5">{value}</p>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
