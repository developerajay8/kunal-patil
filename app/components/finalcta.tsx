import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { FiMessageCircle } from 'react-icons/fi'

export default function finalcta() {
  return (
    <div>
       {/* Final CTA Section */}
      <section className="py-20 px-4 bg-[#f35113] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of women who have already started their journey to financial independence
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">📲 How to Get Started?</h3>
            <p className="text-lg mb-6">Bas mujhe WhatsApp par message karein with these details:</p>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="bg-white/10 p-4 rounded-lg">
                <strong>📝 Name:</strong> Your Full Name
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <strong>🎂 Age:</strong> Your Age
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <strong>💼 Profession:</strong> Current Status
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-semibold">📌 Save My Number First: +91 7032507725</p>
            <button className="bg-white flex mx-auto text-[#0b3a46] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg">
              <FiMessageCircle className="w-5 h-5 mr-2" />
              Click to Message on WhatsApp
            </button>
          </div>

          <div className="mt-8 p-6 bg-white/10 rounded-xl">
            <h4 className="text-xl font-bold mb-3">⏳ Within 24 hours, you'll get:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <BsCheckCircle className="w-5 h-5" />📋 Complete Details
              </div>
              <div className="flex items-center gap-3">
                <BsCheckCircle className="w-5 h-5" />
                🗺️ Clear Roadmap
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-4">
              🌟 Empower her with skills • 🌈 Support her with vision • 🚀 Watch her dreams turn into direction
            </p>
            <p className="text-xl font-bold">❤️ With Strength & Sincerity, Shivani Karn</p>
            <p className="text-lg mt-2 opacity-90">👩‍🏫 Empowering Females to Empower</p>
          </div>
        </div>
      </section>
    </div>
  )
}
