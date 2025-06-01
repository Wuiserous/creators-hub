import React, { useRef } from 'react';
import { FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import Nav from './navBar';
import Home from './Home';
import InfiniteCarousel from "./crousel1";
import TripleCarousel from "./crousel2";
import YouTubeEmbed from "./youtubeIframe";
import ReviewCarousel from "./testimonialCard";
import ProcessSteps from "./steps";
import SkillsProgress from "./skillProgress";
import FAQSection from "./faqSection";
import ContactCard from "./contactCard";
import ShortsCarousel from './crousel2';


function App() {
  const navRef = useRef();
  const aboutRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();

  const scrollToSection = (ref) => {
  if (!ref.current) return;

  const targetY = ref.current.getBoundingClientRect().top + window.pageYOffset;
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 2000; // ms
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

  let startTime = null;

  const animate = (time) => {
    if (!startTime) startTime = time;
    const timeElapsed = time - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeOutCubic(progress);
    window.scrollTo(0, startY + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};


  return (
    <div className='w-full scroll-smooth'>
      {/* App Bar */}
      <nav className="fixed z-10 flex gap-2 border bg-red-500 top-[650px] text-white">
        <button onClick={() => scrollToSection(navRef)}>home</button>
        <button onClick={() => scrollToSection(aboutRef)}>about</button>
      </nav>

      {/* Sections */}
      <Nav ref={navRef} />
      <Home />
      <InfiniteCarousel/>
      <ShortsCarousel ref={aboutRef} />
    </div>
  );
}

export default App;
