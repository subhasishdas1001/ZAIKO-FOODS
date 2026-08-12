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
  metadataBase: new URL("https://zaiko-foods.vercel.app"), // अपनी असली डोमेन यहाँ बदल सकते हैं
  title: {
    default: "Zaiko | Crafted Fresh. Remembered Forever.",
    template: "%s | Zaiko Foods",
  },
  description:
    "Zaiko Foods — a modern premium fast-food destination serving handcrafted burgers, momos, rolls, fries and refreshing drinks with unforgettable taste.",
  keywords: [
    "Zaiko",
    "Zaiko Foods",
    "Zaiko Restaurant",
    "premium foods",
    "momos",
    "burgers",
    "rolls",
    "fast food delivery",
    "order food online",
  ],
  authors: [{ name: "Zaiko Foods" }],
  creator: "Zaiko Foods",
  publisher: "Zaiko Foods",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Zaiko | Crafted Fresh. Remembered Forever.",
    description:
      "Zaiko is a premium fast-food destination serving handcrafted burgers, momos, rolls, fries and refreshing drinks with unforgettable taste.",
    url: "https://zaiko-foods.vercel.app",
    siteName: "Zaiko Foods",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Zaiko Foods Premium Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaiko | Crafted Fresh. Remembered Forever.",
    description:
      "Zaiko is a premium fast-food destination serving handcrafted burgers, momos, rolls and fries.",
    images: ["https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200"],
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
