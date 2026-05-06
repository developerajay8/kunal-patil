"use client";

import { motion } from "framer-motion";
import LeadPopup from "./leadpopup";

const steps = [
  {
    id: "01",
    title: "Instant Start",
    desc: "You get immediate WhatsApp access and a clear roadmap.",
    sub: "No confusion. No waiting.",
  },
  {
    id: "02",
    title: "Step-by-Step Learning",
    desc: "Beginner-friendly system to learn high-income skills.",
    sub: "Even if you're starting from zero",
  },
  {
    id: "03",
    title: "Real Practice",
    desc: "Apply skills on real work, not just theory.",
    sub: "Learn + implement together",
  },
  {
    id: "04",
    title: "Start Earning",
    desc: "Get guidance to start freelancing and earning.",
    sub: "Build your own income step-by-step",
  },
];

export default function JoinProcess() {
  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[#f35113] text-white">

      <div className="max-w-7xl mx-auto text-center">

        {/* 🔥 Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          What Happens After You Join?
        </h2>

        {/* Subtext */}
        <p className="text-white/80 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          No confusion. No guessing.  
          Just a simple path to go from zero → earning.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white/10 backdrop-blur-xl border border-white/10 
              rounded-2xl p-6 text-left hover:scale-105 transition duration-300 shadow-xl"
            >

              {/* Number */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-white text-[#f35113] font-bold mb-4">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-200 leading-relaxed">
                {step.desc}
              </p>

              {/* Divider */}
              <div className="my-4 h-[1px] bg-white/20" />

              {/* Sub */}
              <p className="text-xs text-white/70">
                {step.sub}
              </p>

            </motion.div>
          ))}
        </div>

        {/* 💡 Extra Trust Line */}
        <p className="mt-10 text-sm text-white/80">
          You don’t need to be perfect. You just need to start.
        </p>

        {/* 🚀 CTA */}
        <div className="mt-8">
          <LeadPopup
            trigger={
              <button className="bg-white cursor-pointer text-[#f35113]
              px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition">
                👉 Start Your Journey Today
              </button>
            }
          />
        </div>

      </div>
    </section>
  );
}