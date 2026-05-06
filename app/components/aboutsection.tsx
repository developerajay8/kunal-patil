// components/AboutSection.tsx

"use client";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          About Your Journey
        </h2>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          This isn’t just about earning. It’s about clarity, confidence, and freedom.
        </p>

        {/* Content Blocks */}
        <div className="mt-12 space-y-10 text-left">

          {/* Block 1 */}
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">
              You Don’t Lack Talent
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You don’t lack talent. You lack clarity. It’s not that you don’t want to earn —
              you just don’t know how to start. You’ve saved videos, watched reels,
              and thought “I’ll start tomorrow”… but tomorrow never comes.
            </p>
          </div>

          {/* Block 2 */}
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">
              I Know This Feeling
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Wanting your own money but still asking someone else before spending it.
              Wanting independence but feeling stuck between self-doubt and “log kya kahenge.”
              You’re not lazy. You’re just misguided.
            </p>
          </div>

          {/* Block 3 */}
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">
              My Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              No roadmap. No mentor. Just random searches like “how to earn online”.
              Trying, failing, restarting. Freelancing was slow and frustrating —
              but I kept going and built multiple income skills.
            </p>
          </div>

          {/* Block 4 */}
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">
              Results
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Within 1.5 years, I built a startup doing 1CR+ revenue, earned 20L+,
              and helped 800+ people start their journey.
            </p>
          </div>

          {/* Block 5 */}
          <div className="p-6 rounded-2xl bg-gray-50 shadow-sm">
            <h3 className="font-semibold text-xl text-gray-800 mb-3">
              The Truth
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You don’t need talent, degree, or permission. You need skills that pay.
              And once you have them — everything changes.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <button className="bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition">
              👉 Take Your First Step Today
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}