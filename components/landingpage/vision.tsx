"use client";

import { useEffect } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const Counter = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (val) => Math.floor(val));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
};

export default function ImpactSection() {
  return (
    <section className="relative py-24 px-4 lg:px-8 text-center">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 -z-10 bg-[#c69938]/10 blur-3xl" />

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold">
          Our{" "}
          <span className="text-[#c69938]">Vision & Impact</span>
        </h2>

        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Creating sustainable pathways to dignified employment for millions
        </p>

        {/* 🔻 Stats Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8">

          {/* Stat 1 */}
          <div>
            <h3 className="text-4xl font-bold text-[#c69938]">
              <Counter value={300} />K
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Users in Year 1
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-4xl font-bold text-[#c69938]">
              <Counter value={150} />K
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Active Earners
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-4xl font-bold text-[#c69938]">
              <Counter value={10} />K
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Job Placements
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-4xl font-bold text-[#c69938]">
              ₹<Counter value={260} />L
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Revenue Supporting Youth
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}