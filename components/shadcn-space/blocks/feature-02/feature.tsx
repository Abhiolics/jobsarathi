"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Briefcase, Wallet, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "12M",
    content:
      "Youth entering job market annually",
  },
  {
    icon: Wallet,
    title: "75%",
    content:
      "Lack job-ready skills",
  },
  {
    icon: TrendingUp,
    title: "3 Core",
    content:
      "Skill gaps: English, Digital, Professional",
  },
];

export default function Feature() {
  return (
    <section className="py-20 px-4 lg:px-8">

      <div className="max-w-7xl mx-auto flex flex-col gap-16">

        {/* 🔝 Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto gap-4"
        >
          <Badge variant="outline">Platform Features</Badge>

          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            The Bharat {" "}
            <span className="text-[#c69938]">Paradox</span>
          </h2>

          <p className="text-muted-foreground">
           60% of Bharat's population is under 30, yet only 20-25% are job-ready. Traditional education fails to translate into meaningful employment, especially in Tier-2 and Tier-3 cities.
          </p>
        </motion.div>

        {/* 🔻 Cards */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  className="
                  p-8 h-full rounded-2xl
                  border border-border
                  transition-all duration-300
                  hover:border-[#c69938]/40
                  hover:shadow-[0_10px_40px_rgba(198,153,56,0.2)]
                  hover:-translate-y-2
                "
                >
                  <CardContent className="flex flex-col gap-6">

                    {/* Icon */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#c69938]/10">
                      <Icon className="w-6 h-6 text-[#c69938]" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground mt-2 text-sm">
                        {item.content}
                      </p>
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
