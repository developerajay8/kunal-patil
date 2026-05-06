"use client";

import { useEffect, useRef, useState } from "react";
import LeadPopup from "./leadpopup";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = false;
      video.volume = 1;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Autoplay with sound worked 🎉");
          })
          .catch(() => {
            video.muted = true;
            setIsMuted(true);
            video.play();
          });
      }
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1;
      setIsMuted(false);
      video.play();
    }
  };

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 md:px-16 mt-10 md:mt-20 text-white">

      {/* 🔥 Headline */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-6xl">
        Stop Depending on Others for Money. <br />
        Start Earning with Skills — Even If You’re Starting from Zero.
      </h1>

      {/* ✨ Subheadline */}
      <p className="mt-6 text-gray-300 text-sm md:text-lg max-w-2xl">
        No experience. No degree. No confusion. <br />
        Just a clear path to learn high-income skills and start earning online.
      </p>

      {/* 🚀 CTA */}
      <div className="flex flex-col items-center gap-3 mt-8">
        <LeadPopup
          trigger={
            <button className="bg-white cursor-pointer text-[#0b3a46]
            px-6 py-3 rounded-full text-[16px] font-medium shadow-lg 
            hover:scale-105 transition">
              👉 Start Your Journey Now
            </button>
          }
        />

        {/* ✅ Trust Line */}
        <p className="text-xs text-gray-400">
          Join 800+ girls who have already started building their own income
        </p>
      </div>

      {/* 🎥 Video */}
      <div className="mt-12 pb-12 w-full max-w-7xl relative">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
            controls={false}
          >
            <source
              src="https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778058033/kunal_A_xehtvk.mp4"
              type="video/mp4"
            />
          </video>

          {/* 🔊 Unmute */}
          {isMuted && (
            <button
              onClick={handleUnmute}
              className="absolute bottom-5 right-5 bg-black/70 text-white px-4 py-2 rounded-lg"
            >
              🔊 Tap for Sound
            </button>
          )}
        </div>
      </div>

      {/* 💬 WhatsApp CTA */}
      <div className="flex flex-col sm:flex-row gap-4 pb-12">
        <LeadPopup
          trigger={
            <button className="bg-white cursor-pointer text-[#0b3a46]
            px-6 py-3 rounded-full text-[16px] font-medium shadow-lg 
            hover:scale-105 transition">
              💬 Connect on WhatsApp
            </button>
          }
        />
      </div>
    </section>
  );
}