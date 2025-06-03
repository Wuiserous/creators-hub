import Home from "./Home";
import NavBar from "./navBar";
import InfiniteCarousel from "./crousel1";
import TripleCarousel from "./crousel2";
import YouTubeEmbed from "./youtubeIframe";
import ReviewCarousel from "./testimonialCard";
import ProcessSteps from "./steps";
import SkillsProgress from "./skillProgress";
import FAQSection from "./faqSection";
import ContactCard from "./contactCard";
import NewDesign from "./newDesign";
import App from "./appBar";

export default function MountBoard() {
  return (
    <div className="min-h-screen relative scroll-smooth flex flex-col moving-gradient-bg items-center justify-start ">
      <App />
    </div>
  );
}
