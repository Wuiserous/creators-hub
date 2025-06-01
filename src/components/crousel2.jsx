import React, { useRef, useEffect, useState, forwardRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const shorts = [
  "https://www.youtube.com/embed/1tojp2IwOXA",
  "https://www.youtube.com/embed/nYMRS24mATg",
  "https://www.youtube.com/embed/-Dhg-syHyPM",
  "https://www.youtube.com/embed/-WowH0liGfE",
  "https://www.youtube.com/embed/7hLtb-mucrg?feature=share"
];

const ShortsCarousel = forwardRef((props, ref) =>{
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(2); // third video (index 2)

  const scrollToIndex = (index, behavior = "smooth") => {
    const container = scrollRef.current;
    const child = container?.children[index + 1];
    if (child) {
      container.scrollTo({
        left: child.offsetLeft,
        behavior
      });
    }
  };

  useEffect(() => {
    scrollToIndex(activeIndex, "auto");
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    const children = Array.from(container.children).slice(1, -1);
    const center = container.scrollLeft + container.offsetWidth / 2;

    let closest = 0;
    let minDist = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(center - childCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = idx;
      }
    });

    setActiveIndex(closest);
  };

  const scrollBy = (dir) => {
    let next = activeIndex + (dir === "right" ? 1 : -1);
    if (next < 0 || next >= shorts.length) return;
    setActiveIndex(next);
    scrollToIndex(next);
  };

  return (
    <div ref={ref} className="relative block w-full  w-[400px] lg:w-[750px] mx-auto overflow-hidden">
      <div className="mx-auto w-fit bg-black text-white rounded-full px-6 py-2">Portfolio</div>
      <button
        onClick={() => scrollBy("left")}
        disabled={activeIndex === 0}
        className={`absolute left-0 lg:hidden top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full ${
          activeIndex === 0
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-black/40 text-white hover:bg-black/70"
        }`}
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scrollBy("right")}
        disabled={activeIndex === shorts.length - 1}
        className={`absolute right-0 top-1/2 lg:hidden transform -translate-y-1/2 z-10 p-2 rounded-full ${
          activeIndex === shorts.length - 1
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-black/40 text-white hover:bg-black/70"
        }`}
      >
        <ChevronRight />
      </button>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex space-x-4 p-10 overflow-x-auto snap-x scroll-smooth scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="min-w-[240px] blur scale-[0.90] bg-black/20 rounded-xl lg:min-w-[240px]"></div>
        {shorts.map((url, idx) => (
          <div
            key={idx}
            className={`min-w-[180px] my-3 lg:min-w-[240px] max-w-[240px] aspect-[9/16]  rounded-xl overflow-hidden shadow-lg bg-white snap-center transition-transform duration-300 ease-in-out ${
              idx === activeIndex ? "scale-105" : "scale-95 opacity-80"
            }`}
          >
            <iframe
              width="100%"
              height="100%"
              src={`${url}?autoplay=0&mute=1&modestbranding=1&rel=0`}
              title={`YouTube Shorts ${idx}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded"
            ></iframe>
          </div>
        ))}
        <div className="min-w-[240px] blur scale-[0.90] bg-black/20 rounded-xl lg:min-w-[240px]"></div>
      </div>
      
    </div>
  );
});

export default ShortsCarousel;
