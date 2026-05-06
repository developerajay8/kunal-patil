import React from "react";
import { BiPhone, BiShield } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import LeadPopup from "./leadpopup";

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kunal Patil</h3>
            <p className="text-gray-400 mb-4">
              Helping beginners and females build their own income through
              skill-based online opportunities.
            </p>

            <div className="flex items-center gap-2 text-[#f35113] font-semibold">
              <BiPhone className="w-4 h-4" />
              +91 86430 71462
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-white transition-colors text-left">
                  About
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-left">
                  Benefits
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-left">
                  FAQ
                </button>
              </li>
              <li>
                <LeadPopup
                  trigger={
                    <button className="hover:text-white cursor-pointer transition-colors text-left">
                      Contact
                    </button>
                  }
                />
              </li>
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Privacy & Terms</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button className="hover:text-white transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-left">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button className="hover:text-white transition-colors text-left">
                  Unsubscribe
                </button>
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
              <BiShield className="w-4 h-4" />
              Your data is safe and secure
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">

              <li className="flex items-center gap-2">
                <CgMail className="w-4 h-4" />
                <span className="text-sm">
                  workwithkunalpatil@gmail.com
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BiPhone className="w-4 h-4" />
                <span className="text-sm">+91 86430 71462</span>
              </li>

              <li>
                <LeadPopup
                  trigger={
                    <button className="bg-[#f35113] cursor-pointer text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition mt-2">
                      Get In Touch
                    </button>
                  }
                />
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Kunal Patil. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}