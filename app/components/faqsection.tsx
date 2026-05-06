"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Do I need any prior skills to start?",
    answer:
      "No, you don’t need any prior skills. Everything is taught from scratch in a beginner-friendly way.",
  },
  {
    question: "How soon can I start earning?",
    answer:
      "Many students start seeing results within a few weeks, depending on consistency and effort.",
  },
  {
    question: "Is this suitable for students or working professionals?",
    answer:
      "Yes, this is designed for students, job holders, and even housewives who want to build a side income.",
  },
  {
    question: "Will I get support during the journey?",
    answer:
      "Absolutely! You get continuous mentorship, WhatsApp support, and access to a helpful community.",
  },
  {
    question: "What kind of work will I be doing?",
    answer:
      "You’ll learn high-income skills like content creation, freelancing, AI tools, and digital services.",
  },
  {
    question: "Is this a one-time course or ongoing support?",
    answer:
      "You get complete training along with ongoing support and updates to help you grow consistently.",
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

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-3">
            Everything you need to know before getting started
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
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer bg-[#0b3a46]  transition"
                >
                  <span className="font-medium text-white text-sm md:text-base">
                    {faq.question}
                  </span>
                  <span className="text-[#fff]">
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

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-[#0b3a46] cursor-pointer text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition">
            💬 Still have questions? Connect on WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}