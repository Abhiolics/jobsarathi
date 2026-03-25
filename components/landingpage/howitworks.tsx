"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Sign Up & Start Learning",
    desc: "Download the app, complete a quick skill assessment, and get personalized course recommendations in Hindi or English. Start with foundation courses like English proficiency and digital literacy.",
  },
  {
    title: "Unlock Earning After First Lesson",
    desc: "Complete your first 15-minute lesson and unlock EarnSarathi micro-tasks. Start earning immediately through bank referrals, surveys, and simple digital tasks. Get your first ₹200-500 within days.",
  },
  {
    title: "Complete Courses & Get Certified",
    desc: "Continue learning while earning. Complete course modules, pass assessments, and receive industry-recognized digital certifications. Build your professional profile.",
  },
  {
    title: "Get Placed in Verified Jobs",
    desc: "Access verified job listings matched to your skills. Apply with one-click, get interview support, and land dignified employment. Continue earning through micro-tasks while job hunting.",
  },
];

export default function HowItWorksStepper() {
  return (
    <section className="relative py-24 px-4 lg:px-8">

      {/* 🔥 Glow */}
      <div className="absolute inset-0 -z-10 bg-[#c69938]/10 blur-3xl" />

      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold">
          How It{" "}
          <span className="text-[#c69938]">Works</span>
        </h2>

        <p className="mt-4 text-muted-foreground">
         Your journey from learning to earning to working in 4 simple phases
        </p>

        {/* 🔻 Stepper */}
        <div className="relative mt-16">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-[#c69938] to-transparent" />

          <div className="flex flex-col gap-12">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >

                {/* 🔢 Circle */}
                <div className="relative z-10 flex items-center justify-center w-11 h-10 rounded-full bg-[#c69938] text-white font-semibold shadow-md">
                  {index + 1}
                </div>

                {/* 💎 Content */}
                <div className="text-left glass rounded-2xl p-5 shadow-md hover:shadow-lg transition w-full">

                  <h3 className="text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-2">
                    {step.desc}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}