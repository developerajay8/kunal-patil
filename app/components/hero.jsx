// components/Hero.tsx

"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
     const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Try autoplay with sound
      video.muted = false;
      video.volume = 1;

      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Autoplay with sound worked 🎉");
          })
          .catch(() => {
            console.log("Autoplay blocked, retrying muted...");

            // fallback (browser policy)
            video.muted = true;
            setIsMuted(true);
            video.play();
          });
      }
    }
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    video.muted = false;
    video.volume = 1;
    setIsMuted(false);
    video.play();
  };
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 md:px-16 mt-10 md:mt-20 text-white">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl">
        Transform Your Business <br />
        with Future-Ready Technology
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-gray-300 text-sm md:text-lg max-w-2xl">
        From strategy to execution, we’re your partners in digital transformation.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">

       

        <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition">
          Connect to whatsapp
        </button>
      </div>

      {/* Video Section */}
      <div className="mt-12 pb-12 w-full max-w-6xl">
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        playsInline
        controls={false}
      >
        <source src="https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778058033/kunal_A_xehtvk.mp4" type="video/mp4" />
      </video>

      {/* Unmute Button (fallback UI) */}
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

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pb-12">

       

        {/* CTA */}
        <div className="">
          <button className="bg-[white] cursor-pointer text-[#0b3a46]
          px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition">
           💬 Connect to WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}