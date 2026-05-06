// components/Navbar.tsx

"use client";

import Link from "next/link";
import LeadPopup from "./leadpopup";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-16 py-5">

      {/* Logo */}
      <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-white">
        KUNAL<span className="text-gray-300">PATIL</span>
      </h1>

      {/* Menu Center */}
      <div className="hidden md:flex items-center gap-8 
      bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">

        <Link href="#" className="text-sm text-white hover:text-gray-300 transition">
         Home
        </Link>
        <Link href="#" className="text-sm text-white hover:text-gray-300 transition">
          Mentor
        </Link>
        <Link href="#" className="text-sm text-white hover:text-gray-300 transition">
          Stories
        </Link>
        <Link href="#" className="text-sm text-white hover:text-gray-300 transition">
          Faq
        </Link>
        
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">

       

        {/* CTA */}
        {/* Button 1 */}
      <LeadPopup
        trigger={
          <button className="bg-white sm:block hidden cursor-pointer text-[#0b3a46]
          px-6 py-3 rounded-full text-[16px] font-medium shadow-lg 
          hover:scale-105 transition">
            💬 Connect to WhatsApp
          </button>
        }
      />

<LeadPopup
        trigger={
           <button className="bg-[white] sm:hidden block cursor-pointer text-[#0b3a46]
          px-6 py-3 rounded-full text-[16px] font-medium shadow-lg hover:scale-105 transition">
          <span className="sm:block hidden">Connect to</span> WhatsApp
          </button>
        }
      />

      </div>
    </nav>
  );
}