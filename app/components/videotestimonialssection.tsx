"use client";

import { useState } from "react";
import { FaHeart, FaRegClock, FaShare } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778058310/IMG_6174_pqzslx.mp4",
    caption: "I'm extremely...",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778058310/IMG_6174_pqzslx.mp4",
    caption: "I'm extremely...",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778058310/IMG_6174_pqzslx.mp4",
    caption: "Hey this is...",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dvjpyxdqy/video/upload/q_auto/f_auto/v1778058310/IMG_6174_pqzslx.mp4",
    caption: "I'm extremely...",
  },
];

function VideoCard({
  video,
  activeId,
  setActiveId,
}: any) {
  const [showMenu, setShowMenu] = useState(false);
  const isActive = activeId === video.id;

  return (
    <div
      className={`relative 
        w-full
        rounded-2xl overflow-hidden shadow-2xl shadow-black/50 
        border-2 border-white bg-zinc-900 aspect-[9/16] 
        group cursor-pointer transition-all duration-500 
        ${isActive ? "scale-105 z-20" : ""}
      `}
      onClick={() => setActiveId(isActive ? null : video.id)}
    >
      {isActive ? (
        <video
  src={video.src}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
  muted
  preload="metadata"
  playsInline
/>
      ) : (
        <>
          {/* ✅ Thumbnail अब video का first frame होगा */}
          <div className="absolute inset-0">
            <video
              src={video.src}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              muted
              preload="metadata"
              playsInline
            />
            <div className="absolute inset-0 bg-[#f35014]/10"></div>
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full  backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/25 transition">
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6 text-white ml-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </div>
          </div>
        </>
      )}

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
            <div key={i} className="w-1 h-1 rounded-full bg-white/70" />
          ))}
        </div>
      </div>

      {showMenu && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-0 right-0 w-[200px] sm:w-[220px] h-full bg-black/95 backdrop-blur-md z-30 p-4 border-l border-white/10"
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

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0b3a46]">
            Student Success Stories
          </h2>
          <p className="text-gray-500 mt-3">
            Real results from real people 🚀
          </p>
        </div>

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

        <div className="text-center mt-14 pb-12">
          <button className="bg-[#0b3a46] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:scale-105 transition">
            💬 Connect to WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
}