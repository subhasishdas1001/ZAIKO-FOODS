import type { Metadata } from "next";
import { Playfair_Display, Manrope, Cormorant } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
 title: "Zaiko | Crafted Fresh. Remembered Forever.",
  description:
    "Zaiko Foods — a modern premium fast-food brand...",
  keywords: [
    "Zaiko Foods",
    "premium foods",
    "momos",
    "burgers",
    "rolls",
    "fast food delivery",
  ],
  openGraph: {
    title: "Zaiko | Crafted Fresh. Remembered Forever.",
    description: "Zaiko is a premium fast-food destination serving handcrafted burgers, momos, rolls, fries and refreshing drinks with unforgettable taste.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} ${cormorant.variable}`}>
      <body className="bg-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
