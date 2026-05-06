import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import MentorSection from "./components/mentorsection";
import VideoTestimonialsSection from "./components/videotestimonialssection";
import JoinProcess from "./components/joinprocess";
import FAQSection from "./components/faqsection";
import FinalCta from "./components/finalcta";
export default function Home() {
  return (
    <div className=" 
     bg-[linear-gradient(135deg,#071c24_0%,#0b3a46_50%,#021014_100%)]">
      <Navbar/>
      <HeroSection/>
      <MentorSection/>
    
      <VideoTestimonialsSection/>
      <JoinProcess/>
      <FAQSection/>
      <FinalCta/>
    </div>
  );
}
