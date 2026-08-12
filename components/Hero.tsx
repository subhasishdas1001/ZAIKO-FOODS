"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[580px] w-full overflow-hidden flex items-center justify-center pt-12 md:pt-0">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-4xl mx-auto w-full"
      >
        <motion.div variants={item} className="mb-4 sm:mb-6">
          <Image
            src="/logo.png"
            alt="Zaiko Foods crown crest"
            width={110}
            height={110}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-[110px] md:h-[110px] drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            priority
          />
        </motion.div>

        <motion.p variants={item} className="font-label uppercase tracking-widest2 text-gold text-xs sm:text-sm md:text-base mb-3 sm:mb-4">
          Fresh &middot; Fast &middot; Premium
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-3xl sm:text-5xl md:text-7xl font-bold text-ivory leading-[1.15] sm:leading-[1.1] max-w-4xl"
        >
          Crafted Fresh
          <br />
          <span className="text-gradient-gold">Remembered Forever</span>
        </motion.h1>

        <motion.p variants={item} className="mt-4 sm:mt-6 max-w-xl text-ivory/80 text-sm sm:text-base md:text-lg font-body px-2">
          Zaiko is a premium fast-food destination serving handcrafted burgers, momos, rolls, fries and refreshing drinks with unforgettable taste.
        </motion.p>

        <motion.div variants={item} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-xs sm:max-w-none">
          <Link
            href="/order"
            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-gold-gradient text-ink font-semibold tracking-wide shadow-gold hover:scale-105 active:scale-95 transition-transform duration-300"
          >
            Order Now
          </Link>
          <Link
            href="/menu"
            className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full border border-gold/50 text-ivory font-semibold tracking-wide hover:bg-gold/10 hover:border-gold transition-colors duration-300"
          >
            View Menu
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-gold/70"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.div>
    </section>
  );
}