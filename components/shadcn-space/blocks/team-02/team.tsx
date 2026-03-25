"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

type team = {
  name: string;
  role: string;
  image: string;

}[];

const teamData: team = [
  {
    name: "Recent Graduates",
    role: "College/ITI graduates lacking job-ready skills seeking their first opportunity",
    image: "https://plus.unsplash.com/premium_photo-1661897207286-048ad6edac6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
  {
    name: "Rural Youth",
    role: "Youth from villages and small towns ready to transition to formal employment",
    image: "https://plus.unsplash.com/premium_photo-1734691181230-4fa53daab2bc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
  {
    name: "Career Switchers",
    role: "Individuals looking to upskill and transition to better job opportunities",
    image: "https://plus.unsplash.com/premium_photo-1661771773771-a093c948ba92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
  {
    name: "Family Earners",
    role: "Youth needing to support families while building long-term career prospects",
    image: "https://plus.unsplash.com/premium_photo-1770544867173-66f434844910?q=80&w=2124&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  },
];

const Team = () => {
  return (
    <section>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16">
          <div className="flex flex-col items-center justify-center gap-16">
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="max-w-xl mx-auto flex flex-col items-center justify-center text-center gap-4"
            >
              <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm">
               Our Core Offerings
              </Badge>
              <div className="flex flex-col items-center justify-center gap-3">
                <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
                 Who We Serve
                </h2>
                <p className="text-base font-normal text-muted-foreground">
                 Empowering youth across Tier-2 and Tier-3 cities in Bharat
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {teamData?.map((value, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="group flex flex-col items-center justify-center gap-6"
                  >
                    <div className="relative w-full h-80 overflow-hidden items-center">
                      <img
                        src={value.image}
                        alt="team-img"
                        height={325}
                        width={270}
                        className="w-full h-full object-cover"
                      />
                
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-medium text-foreground">
                        {value.name}
                      </h3>
                      <p className="text-sm font-normal text-muted-foreground">
                        {value.role}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

