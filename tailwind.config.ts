import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        charcoal: "#141414",
        surface: "#1B1B1B",
        ivory: "#FAF9F6",
        bone: "#F1EEE6",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F3D983",
          deep: "#B8860B",
        },
        grey: {
          warm: "#8A8A8A",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        label: ["var(--font-cormorant)", "serif"],
      },
      letterSpacing: {
        widest2: "0.3em",
      },
      boxShadow: {
        gold: "0 0 40px -10px rgba(212,175,55,0.35)",
        card: "0 10px 40px -12px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3D983 0%, #D4AF37 50%, #B8860B 100%)",
        "ink-fade": "linear-gradient(180deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0.9) 100%)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
