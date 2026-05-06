import React from 'react'
import { BiAward } from 'react-icons/bi'
import { FaUserShield } from 'react-icons/fa'

export default function Know() {
  return (
    <div>
       <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-[#f35113] mb-6">
            Student Success Stories
          </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                <div className="bg-[#f35113] text-white w-16 h-16 rounded-full flex items-center justify-center">
                  <BiAward className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">5</div>
                  <div className="text-gray-600">Years of experience in training and coaching</div>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                <div className="bg-[#f35113] text-white w-16 h-16 rounded-full flex items-center justify-center">
                  <FaUserShield className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">1000+</div>
                  <div className="text-gray-600">Entrepreneurs reached in the last 5 years</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#f35113] text-white p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">🔥 Now it's YOUR time</h3>
                <p className="text-lg mb-6">Let's change your future — Together! 💪</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">₹16L</div>
                    <div className="text-sm opacity-90">Earned in 10 Months</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">300+</div>
                    <div className="text-sm opacity-90">Students Earning ₹50K-₹1L</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
