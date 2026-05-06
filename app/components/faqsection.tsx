"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import LeadPopup from "./leadpopup";

const faqs = [
  {
    question: "What if I don’t have any skills?",
    answer:
      "Perfect. That’s exactly where you start. Everything is taught from zero in a simple, beginner-friendly way.",
  },
  {
    question: "What if I don’t have time?",
    answer:
      "You don’t need hours every day. Even 1–2 hours with consistency is enough to start building skills and income.",
  },
  {
    question: "What if I fail?",
    answer:
      "You only fail when you don’t start. With the right guidance and support, you’ll always move forward step by step.",
  },
  {
    question: "What if I’m not confident?",
    answer:
      "Confidence doesn’t come before starting. It builds after you take action and see small results.",
  },
  {
    question: "Is this only for students?",
    answer:
      "No. This is for students, job holders, and even housewives — anyone who wants to earn independently.",
  },
  {
    question: "Will I get support during the journey?",
    answer:
      "Yes. You’ll get continuous mentorship, WhatsApp support, and a community so you’re never doing this alone.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* 🔥 Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#f35113]">
            “But what if…?”
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            These are the exact doubts everyone has before starting.
            Let’s clear them.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer bg-[#f35113]"
                >
                  <span className="font-medium text-white text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span className="text-white">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 pt-3 text-sm text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 💡 Extra reassurance */}
        <p className="text-center text-gray-600 text-sm mt-10">
          You don’t need everything figured out.  
          You just need to take the first step.
        </p>

        {/* 🚀 CTA */}
        <div className="text-center mt-8">
          <LeadPopup
            trigger={
              <button className="bg-[#f35113] cursor-pointer text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition">
                👉 Start Your Journey Today
              </button>
            }
          />
        </div>

      </div>
    </section>
  );
}