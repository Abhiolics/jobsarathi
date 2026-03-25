"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function EarningCalculator() {
  const [step, setStep] = useState<"intro" | "form" | "result">("intro");
  const [hours, setHours] = useState(22);
  const [city, setCity] = useState("tier3");
  const [loading, setLoading] = useState(false);

  const baseRate = city === "tier1" ? 300 : city === "tier2" ? 200 : 150;
  const monthlyEarning = Math.round(hours * baseRate * 4);

  return (
    <section className="relative py-24 px-4 lg:px-8 text-center">

      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-[#c69938]/10 blur-3xl" />

      <div className="max-w-xl mx-auto min-h-[420px] flex items-center">

        {/* 🔄 Skeleton Loader */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass rounded-3xl p-8 shadow-xl w-full animate-pulse"
          >
            <div className="h-6 w-40 bg-[#c69938]/20 rounded mb-4" />
            <div className="h-4 w-full bg-[#c69938]/10 rounded mb-2" />
            <div className="h-4 w-5/6 bg-[#c69938]/10 rounded mb-6" />

            <div className="h-10 w-full bg-[#c69938]/10 rounded mb-4" />
            <div className="h-10 w-full bg-[#c69938]/10 rounded" />
          </motion.div>
        )}

        {/* 🔻 Content */}
        {!loading && (
          <AnimatePresence mode="wait">

            {/* 🔥 STEP 1: INTRO */}
            {step === "intro" && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-3xl p-8 shadow-xl w-full"
              >
                <h2 className="text-2xl font-semibold">
                  💰 Want to know your earning potential?
                </h2>

                <p className="mt-3 text-muted-foreground">
                  Discover how much you can earn while learning 🚀
                </p>

                <button
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setStep("form");
                      setLoading(false);
                    }, 500);
                  }}
                  className="mt-6 px-6 py-3 rounded-md bg-[#c69938] text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                  ⚡ Fill Details & Know
                </button>
              </motion.div>
            )}

            {/* 🧾 STEP 2: FORM */}
            {step === "form" && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-3xl p-8 shadow-xl text-left w-full"
              >
                <h3 className="text-lg font-semibold mb-4">
                  Know your earning potential
                </h3>
                <h3 className="text-lg font-semibold mb-4">
                  Enter your details
                </h3>

                {/* City */}
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3 rounded-xl border bg-white/60 mb-6"
                >
                  <option value="tier1">Tier-1 City</option>
                  <option value="tier2">Tier-2 City</option>
                  <option value="tier3">Tier-3 City</option>
                </select>

                {/* Slider */}
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  className="w-full accent-[#c69938]"
                />

                <p className="mt-2 text-[#c69938] font-semibold">
                  {hours} hours/week
                </p>

                <button
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => {
                      setStep("result");
                      setLoading(false);
                    }, 600);
                  }}
                  className="mt-6 w-full py-3 rounded-md bg-[#c69938] text-white font-semibold shadow-lg hover:scale-105 transition"
                >
                  🚀 Calculate Earnings
                </button>
              </motion.div>
            )}

            {/* 🎉 STEP 3: RESULT */}
            {step === "result" && (
              <motion.div
                key="result"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-3xl p-8 shadow-xl text-center w-full"
              >
                <h2 className="text-xl font-semibold">
                  🎉 Woohoo! You can earn
                </h2>

                <motion.h1
                  key={monthlyEarning}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-5xl font-bold text-[#c69938] mt-3"
                >
                  ₹{monthlyEarning.toLocaleString()}
                </motion.h1>

                <p className="text-muted-foreground mt-2">
                  per month while learning
                </p>

                {/* Breakdown */}
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>Tasks: ₹{Math.round(monthlyEarning * 0.6)}</p>
                  <p>Referrals: ₹{Math.round(monthlyEarning * 0.4)}</p>
                </div>

                {/* CTA */}
                <button
                  className="
                  mt-6 px-6 py-3 rounded-md
                  bg-[#c69938] text-white font-semibold
                  shadow-lg
                  hover:scale-105
                  hover:shadow-[0_8px_30px_rgba(198,153,56,0.4)]
                  transition
                "
                >
                  🚀 Start Earning Now
                </button>

                {/* Back */}
         
              </motion.div>
            )}

          </AnimatePresence>
        )}
      </div>
    </section>
  );
}