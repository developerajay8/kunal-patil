"use client";

import LeadPopup from "./leadpopup";

export default function MentorSection() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Card */}
        <div className="bg-[#f35113] rounded-3xl p-6 md:p-10 shadow-xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT - IMAGE */}
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md transform transition duration-500 group-hover:scale-105">
                <img
                  src="/IMG_4401.JPG.jpeg"
                  alt="Mentor"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT - CONTENT */}
            <div className="space-y-5">

              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium">
                💬 My Story
              </span>

              {/* Name */}
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Hi, I'm Kunal Patil
              </h2>

              {/* 🔥 Story (Converted from your ABOUT section) */}
              <p className="text-gray-100 text-sm md:text-base leading-relaxed">
                There was a time when I also felt stuck… confused… and dependent.
                I wanted to earn, but I didn’t know where to start.
              </p>

              <p className="text-gray-100 text-sm md:text-base leading-relaxed">
                I tried figuring things out on my own — watching random videos,
                saving reels… but nothing actually worked.
              </p>

              <p className="text-gray-100 text-sm md:text-base leading-relaxed">
                Until I realized one thing — 
                <span className="font-semibold text-white">
                  {" "}skills are the only way to earn online.
                </span>
              </p>

              <p className="text-gray-100 text-sm md:text-base leading-relaxed">
                Once I started learning the right skills with the right guidance,
                everything changed.
              </p>

              {/* Highlight Box */}
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <p className="font-semibold text-[#f35113]">✨ Today:</p>
                <p className="text-gray-700 text-sm md:text-base">
                  I help girls and beginners start from zero and build their own
                  income using real-world skills.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-2 text-sm md:text-base text-gray-200">
                <p>✅ Started from zero (just like you)</p>
                <p>💻 Built income using skills</p>
                <p>👩‍💻 Helping others do the same</p>
              </div>

              {/* CTA */}
              <LeadPopup
                trigger={
                  <button className="mt-4 cursor-pointer bg-[#f38458] text-white px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
                    💬 Connect on WhatsApp
                  </button>
                }
              />

              {/* Stats */}
              <div className="grid grid-cols-3 sm:gap-4 mt-6">
                <div className="bg-white sm:rounded-xl p-4 text-center shadow">
                  <h3 className="text-xl font-bold text-[#f35113]">800+</h3>
                  <p className="text-xs text-gray-500">Students Trained</p>
                </div>
                <div className="bg-white sm:rounded-xl p-4 text-center shadow">
                  <h3 className="text-xl font-bold text-[#f35113]">100%</h3>
                  <p className="text-xs text-gray-500">Practical Learning</p>
                </div>
                <div className="bg-white sm:rounded-xl p-4 text-center shadow">
                  <h3 className="text-xl font-bold text-[#f35113]">24/7</h3>
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