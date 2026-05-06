import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero";
import MentorSection from "./components/mentorsection";
import VideoTestimonialsSection from "./components/videotestimonialssection";
import JoinProcess from "./components/joinprocess";
import FAQSection from "./components/faqsection";
import FinalCta from "./components/finalcta";
import Footer from "./components/footer";
import Know from "./components/know";
export default function Home() {
  return (
    <div className=" 
     bg-[linear-gradient(135deg,#f35113_0%,#f35113_50%,#f35113_100%)]">
      <Navbar/>
      <HeroSection/>
      <MentorSection/>
    
      <VideoTestimonialsSection/>
      <JoinProcess/>
      <Know/>
      <FAQSection/>
      <FinalCta/>
      <Footer/>
    </div>
  );
}
