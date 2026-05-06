import React from "react";
import { BsCheckCircle } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import LeadPopup from "./leadpopup";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-[#f35113] text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* 🔥 Headline */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          You Don’t Need to Be Ready.
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          You just need to take the first step.  
          Don’t stay stuck for another 6 months thinking “I’ll start soon.”
        </p>

        {/* 💡 Simple Steps */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold mb-6">
            📲 How to Get Started?
          </h3>

          <p className="text-base mb-6 opacity-90">
            Just message on WhatsApp with:
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="bg-white/10 p-4 rounded-lg">
              <strong>📝 Name</strong>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <strong>🎂 Age</strong>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <strong>💼 What you do</strong>
            </div>
          </div>
        </div>

        {/* 📞 Number */}
        <p className="text-lg font-semibold mb-6">
          📌 Save this number: <span className="font-bold">+91 86430 71462</span>
        </p>

        {/* 🚀 CTA */}
        <LeadPopup
          trigger={
            <button className="bg-white flex items-center mx-auto text-[#0b3a46] px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
              <FiMessageCircle className="w-5 h-5 mr-2" />
              👉 Start Your Journey on WhatsApp
            </button>
          }
        />

        {/* ✅ What they get */}
        <div className="mt-10 p-6 bg-white/10 rounded-xl">
          <h4 className="text-xl font-bold mb-4">
            ⏳ After you message, you’ll get:
          </h4>

          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="flex items-center gap-3">
              <BsCheckCircle className="w-5 h-5" />
              Step-by-step guidance
            </div>
            <div className="flex items-center gap-3">
              <BsCheckCircle className="w-5 h-5" />
              Clear roadmap to start earning
            </div>
            <div className="flex items-center gap-3">
              <BsCheckCircle className="w-5 h-5" />
              Beginner-friendly support
            </div>
            <div className="flex items-center gap-3">
              <BsCheckCircle className="w-5 h-5" />
              No confusion, no overwhelm
            </div>
          </div>
        </div>

        {/* 💥 Final Line */}
        <p className="mt-10 text-sm md:text-base opacity-90 max-w-xl mx-auto">
          Your future doesn’t change by waiting.  
          It changes when you decide.
        </p>

      </div>
    </section>
  );
}