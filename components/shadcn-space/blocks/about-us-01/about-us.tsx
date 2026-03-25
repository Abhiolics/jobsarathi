"use client";

import { cn } from "@/lib/utils";
import { Instrument_Serif } from "next/font/google";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

const AnimatedCounter = ({ value, isInView }: any) => {
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (v) => Math.floor(v));

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView]);

  return <motion.span>{display}</motion.span>;
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 text-center overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#c69938]/10 via-transparent to-transparent blur-3xl" />

      <div className="max-w-5xl mx-auto">

        {/* 🚀 Heading */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground leading-tight"
        >
         Building Bharat’s <br /> First{" "} 
          <span
            className={cn(
              "bg-gradient-to-r from-[#c69938] to-yellow-400 bg-clip-text text-transparent",
              instrumentSerif.className
            )}
          >
            Learn–Earn–Work
          </span>
          <span> Ecosystem</span>
        </motion.h1>

        {/* 🧠 Subtext */}
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          We are building India's largest youth earning ecosystem — connecting
          opportunities, skills, and income at scale.
        </p>

        {/* 🎯 CTA (STRONG FOCUS) */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button
  className="
  px-8 py-3 rounded-md
  bg-[#c69938] text-white
  font-semibold text-sm
  shadow-md
  cursor-pointer
  transition-all duration-300 ease-out
  hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(198,153,56,0.35)]
  active:scale-[0.98]
  focus:outline-none focus:ring-2 focus:ring-[#c69938]/40
"
>
  🚀 Start Earning Now
</button>

<button
  className="
  px-8 py-3 rounded-md
  border border-border
  bg-white/60 backdrop-blur-md
  text-foreground font-medium text-sm
  cursor-pointer
  transition-all duration-300 ease-out
  hover:bg-white hover:border-[#c69938]/40
  hover:
  active:scale-[0.98]
  focus:outline-none focus:ring-2 focus:ring-[#c69938]/30
"
>
  Explore Platform
</button>
        </div>

        {/* 🔻 FLOATING STATS */}
        <div
          ref={ref}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12"
        >

          {/* Stat 1 */}
          <div className="glass rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-5xl font-bold">
              <AnimatedCounter value={450} isInView={isInView} />M+
            </h3>
            <p className="text-muted-foreground mt-1">Youth We Serve</p>
          </div>

          {/* Stat 2 */}
          <div className="glass rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-5xl font-bold">
              ₹<AnimatedCounter value={500} isInView={isInView} />+
            </h3>
            <p className="text-muted-foreground mt-1">
              Avg. First Earning
            </p>
          </div>

          {/* Stat 3 */}
          <div className="glass rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
            <h3 className="text-5xl font-bold">
              <AnimatedCounter value={10000} isInView={isInView} />+
            </h3>
            <p className="text-muted-foreground mt-1">
              Job Placements (Year 1 Goal)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}