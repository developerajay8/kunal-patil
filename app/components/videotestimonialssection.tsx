


"use client";

import { useState } from "react";
import { FaHeart, FaRegClock, FaShare } from "react-icons/fa";
import LeadPopup from "./leadpopup";


const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778058310/IMG_6174_pqzslx.mp4",
    thumbnail: "/1.png", // 👈 apni image
    caption: "From confused → started earning 💰",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778059247/IMG_6175_l3i9oy.mp4",
    thumbnail: "/2.png",
    caption: "First income feeling ❤️",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778061206/IMG_6173_pcbq7r.mp4",
    thumbnail: "/3.png",
    caption: "Started from zero 🚀",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778063785/IMG_6188_vhv9dz.mp4",
    thumbnail: "/4.png",
    caption: "Now working with clients 💻",
  },
];

function VideoCard({ video, activeId, setActiveId }: any) {
  const [showMenu, setShowMenu] = useState(false);
  const isActive = activeId === video.id;

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden shadow-xl 
      border border-white/10 aspect-[9/16] group cursor-pointer transition-all duration-300
      ${isActive ? "scale-105 z-20" : ""}`}
      onClick={() => setActiveId(isActive ? null : video.id)}
    >
      {isActive ? (
        <video
          src={video.src}
          className="w-full h-full object-cover"
          autoPlay
          controls
          playsInline
        />
      ) : (
        <>
          {/* ✅ Thumbnail Image */}
          <img
            src={video.thumbnail}
            alt="video thumbnail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* ▶ Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-black/80 transition">
              ▶
            </div>
          </div>
        </>
      )}

      {/* Caption */}
      <div className="absolute bottom-2 left-2 right-2 text-white text-xs bg-black/60 px-2 py-1 rounded-md">
        {video.caption}
      </div>

      {/* Menu */}
      <div
        className="absolute top-2.5 right-2.5 z-20"
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
      >
        <div className="flex gap-[3px] flex-col items-center">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-white/80" />
          ))}
        </div>
      </div>

      {showMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 right-0 w-[200px] h-full bg-black/95 backdrop-blur-md z-30 p-4 border-l border-white/10"
        >
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-sm font-semibold">More options</p>
            <button onClick={() => setShowMenu(false)} className="text-white">
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-4 text-white/80 text-sm">
            <button className="flex items-center gap-2 hover:text-white">
              <FaHeart /> Like
            </button>
            <button className="flex items-center gap-2 hover:text-white">
              <FaRegClock /> Watch Later
            </button>
            <button className="flex items-center gap-2 hover:text-white">
              <FaShare /> Share
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VideoTestimonialsSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="w-full bg-white pt-10 sm:pt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#f35113]">
            You’re Not Alone in This
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            800+ girls have already started their journey.  
            They once felt stuck… confused… just like you.
          </p>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>

        {/* Text */}
        <div className="text-center mt-10 text-gray-700 text-sm md:text-base max-w-xl mx-auto">
          <p>
            They are now learning skills, getting freelance work,  
            and building their own income — step by step.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 pb-12">
          <LeadPopup
            trigger={
              <button className="bg-[#f35113] cursor-pointer text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition">
                👉 Start Your Journey Today
              </button>
            }
          />
        </div>

      </div>
    </section>
  );
}