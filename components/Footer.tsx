import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/locations", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 pt-16 pb-8 px-6 md:px-10">

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.png"
              alt="Zaiko Foods logo"
              width={40}
              height={40}
            />

            <span className="font-display text-lg text-ivory">
              ZAIKO <span className="text-gold">FOODS</span>
            </span>
          </Link>

          <p className="text-ivory/50 font-body text-sm leading-relaxed max-w-xs">
            Premium street food, crafted fresh and served with a luxury experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-label uppercase tracking-widest2 text-gold text-sm mb-4">
            Quick Links
          </h4>

          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-ivory/60 hover:text-gold text-sm font-body transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-label uppercase tracking-widest2 text-gold text-sm mb-4">
            Legal
          </h4>

          <ul className="space-y-2.5">
            <li>
              <Link
                href="/privacy-policy"
                className="text-ivory/60 hover:text-gold text-sm font-body transition-colors"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                href="/terms"
                className="text-ivory/60 hover:text-gold text-sm font-body transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-label uppercase tracking-widest2 text-gold text-sm mb-4">
            Follow Us
          </h4>

          <div className="flex gap-3">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/zaikobrand.07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zaiko Foods on Instagram"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-colors"
            >
              <Instagram size={16} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61593006758419"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zaiko Foods on Facebook"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ivory/70 hover:text-gold hover:border-gold transition-colors"
            >
              <Facebook size={16} />
            </a>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 text-center">
        <p className="text-ivory/40 font-body text-xs">
          &copy; {new Date().getFullYear()} Zaiko Foods. All rights reserved.
        </p>
      </div>

    </footer>
  );
}