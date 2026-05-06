// components/MentorSection.tsx

"use client";

import Image from "next/image";

export default function MentorSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Card */}
        <div className="bg-[linear-gradient(135deg,#071c24_0%,#0b3a46_50%,#021014_100%)] rounded-3xl p-6 md:p-10 shadow-xl">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT - IMAGE */}
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md transform transition duration-500 group-hover:scale-105">
                <img
                  src="/IMG_4401.JPG.jpeg" // 👈 apni image daalo
                  alt="Mentor"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT - CONTENT */}
            <div className="space-y-5">

              <span className="inline-block bg-purple-100 text-[#0b3a46] px-4 py-1 rounded-full text-sm font-medium">
                🚀 Your Mentor
              </span>

              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Hi, I'm Ishika Pansari
              </h2>

              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <p className="font-semibold text-[#0b3a46]">🎯 Mission:</p>
                <p className="text-gray-700 text-sm md:text-base">
                  Build a Genuine Side Hustle From Home – No Experience Needed
                </p>
              </div>

              <p className="text-gray-100 text-sm md:text-base leading-relaxed">
                I help students, professionals, and housewives build a reliable
                side hustle from home. Whether part-time or full-time — you can
                create a sustainable income with real skills.
              </p>

              {/* Features */}
              <div className="space-y-2 text-sm md:text-base text-gray-200">
                <p>✅ Real, skill-based opportunities</p>
                <p>💻 Work from anywhere</p>
                <p>🌱 Sustainable growth</p>
              </div>

              {/* CTA */}
              <button className="mt-4 bg-[#0b3a46] text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
                Connect on WhatsApp
              </button>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 text-center shadow">
                  <h3 className="text-xl font-bold text-[#0b3a46]">1000+</h3>
                  <p className="text-xs text-gray-500">Students Trained</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow">
                  <h3 className="text-xl font-bold text-[#0b3a46]">100%</h3>
                  <p className="text-xs text-gray-500">Practical</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center shadow">
                  <h3 className="text-xl font-bold text-[#0b3a46]">24/7</h3>
                  <p className="text-xs text-gray-500">Support</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}