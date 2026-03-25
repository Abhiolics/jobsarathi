"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check, Flame } from "lucide-react";
import { motion } from "framer-motion";

type PricingPlan = {
  plan_name: string;
  plan_descp: string;
  plan_price: number;
  plan_feature: string[];
  plan_recommended: boolean;
};

const pricingData: PricingPlan[] = [
  {
    plan_name: "JobSarathi",
    plan_descp: "Learn → Get Certified → Get Job.",
    plan_price: 0,
    plan_feature: [
      "Bilingual (Hindi-English) skill courses",
      "English proficiency training",
      "Digital literacy modules",
      "Professional readiness programs",
      "Job readiness assessments",
      "Verified job listings platform",
      "Industry-recognized certifications",
    ],
    plan_recommended: false,
  },
  {
    plan_name: "EarnSarathi",
    plan_descp: "Learn → Do Micro Tasks → Earn Cash.",
    plan_price: 0,
    plan_feature: [
      "Micro-task marketplace (unlocked after first lesson)",
      "Bank referral programs (₹300–500)",
      "Survey completion tasks (₹50–150)",
      "Fintech partner integrations",
      "Affiliate marketing opportunities",
      "Real-time payout tracking",
      "Weekly payments to your account",
    ],
    plan_recommended: true,
  },
];

const pricingCardVariants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function Pricing() {
  return (
    <section className="bg-background py-10 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 xl:px-16 lg:py-20 sm:py-16 py-8">
        <div className="flex flex-col gap-8 md:gap-12 items-center justify-center w-full">

          {/* 🔝 Heading */}
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <Badge variant="outline" className="py-1 px-3 text-sm">
              Our Solution
            </Badge>

            <h2 className="text-foreground text-3xl sm:text-5xl font-medium">
              Dual Ladder Model
            </h2>
          </div>

          {/* 🔻 Cards */}
          <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full">

            {pricingData.map((plan, index) => {
              const isFeatured = plan.plan_recommended;

              return (
                <motion.div
                  key={index}
                  variants={pricingCardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.25,
                    duration: 0.6,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className={cn(
                    "relative flex-1 flex flex-col",
                    isFeatured && "z-10 scale-[1.02]"
                  )}
                >

                  {/* 🔥 Featured Border */}
                  {isFeatured && (
                    <div className="absolute -inset-0.5 rounded-2xl overflow-hidden">
                      <div className="absolute -inset-full blur-xl animate-spin [animation-duration:3s] bg-conic from-[#c69938] via-yellow-400 to-[#c69938]" />
                      <div className="absolute inset-0.5 rounded-2xl bg-background" />
                    </div>
                  )}

                  {/* 💎 Card */}
                  <Card
                    className={cn(
                      "relative flex-1 flex flex-col rounded-2xl p-8 gap-8 transition-all duration-300",
                      isFeatured
                        ? "border-0"
                        : "border border-border hover:border-[#c69938]/40 hover:shadow-[0_10px_40px_rgba(198,153,56,0.15)]"
                    )}
                  >
                    <CardHeader className="p-0">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-2xl font-medium text-primary">
                            {plan.plan_name}
                          </CardTitle>

                          {isFeatured && (
                            <Badge className="flex items-center gap-1.5">
                              <Flame size={16} /> Recommended
                            </Badge>
                          )}
                        </div>

                        <CardDescription className="text-base">
                          {plan.plan_descp}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="flex flex-col flex-1 gap-8 p-0">
                      <Separator />

                      {/* Features */}
                      <ul className="flex flex-col gap-4 flex-1">
                        {plan.plan_feature.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-3 text-muted-foreground"
                          >
                            <Check className="size-4 text-[#c69938]" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Button
                        variant={isFeatured ? "default" : "outline"}
                        className={cn(
                          "w-full h-12 cursor-pointer transition-all duration-300",
                          !isFeatured &&
                            "hover:bg-[#c69938] hover:text-white border-[#c69938]"
                        )}
                      >
                        {isFeatured ? "Start Earning" : "Start Learning"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}