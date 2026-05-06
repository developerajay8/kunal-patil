"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Instant Connection",
    desc: "Get direct WhatsApp access and start your journey immediately.",
    sub: "Real-time roadmap from day one",
  },
  {
    id: "02",
    title: "Complete Access",
    desc: "Step-by-step training system designed for beginners.",
    sub: "24x7 mentor support always with you",
  },
  {
    id: "03",
    title: "Daily Mentorship",
    desc: "Get consistent guidance and real freelancing exposure.",
    sub: "Learn + earn simultaneously",
  },
  {
    id: "04",
    title: "Start Earning",
    desc: "Build multiple income streams with real skills.",
    sub: "No dependency on one source",
  },
];

export default function JoinProcess() {
  return (
    <section className="w-full py-20 px-6 md:px-16 
    bg-[linear-gradient(135deg,#071c24_0%,#0b3a46_50%,#021014_100%)] text-white">

      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          What Happens When You Join?
        </h2>

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

              {/* Number Circle */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-[white] text-[#0b3a46] font-bold mb-4">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-300 transition">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.desc}
              </p>

              {/* Divider */}
              <div className="my-4 h-[1px] bg-white/20" />

              {/* Sub text */}
              <p className="text-xs text-purple-300">
                {step.sub}
              </p>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <button className="bg-[white] cursor-pointer text-[#0b3a46]
          px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition">
           💬 Connect to WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}