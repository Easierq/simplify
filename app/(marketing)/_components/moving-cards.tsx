"use client";

import { useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    src: "/sliding/ps.svg",
    title: "Photoshop",
  },
  {
    id: 2,
    title: "Figma",
    src: "/sliding/fg.svg",
  },
  {
    id: 3,
    title: "Adobe XD",
    src: "/sliding/xd.svg",
  },
  {
    id: 4,
    title: "GEnerative AI",
    src: "/sliding/ai.svg",
  },
  {
    id: 5,
    title: "Adobe illustrator",
    src: "/sliding/ill.svg",
  },
];
export default function InfiniteHorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (scrollContainer) {
      let scrollWidth = scrollContainer.scrollWidth / 2; // Half of the scrollable content
      let scrollSpeed = 1; // Adjust the speed (higher is faster)

      let animationFrameId: number;

      const smoothScroll = () => {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollWidth) {
          scrollContainer.scrollLeft = 0; // Reset to start when reaching the end
        }
        animationFrameId = requestAnimationFrame(smoothScroll);
      };

      smoothScroll();

      return () => cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <div
      className="relative w-full h-auto mb-5 md:mb-10 overflow-hidden"
      ref={scrollRef}
    >
      <div className="flex whitespace-nowrap">
        {data.map((d, index) => (
          <div className="w-auto min-w-44 md:min-w-64 h-20 md:h-24 flex gap-5 items-center mx-2 md:mx-4 justify-center bg-sky-100 rounded-md">
            <div>
              <img src={d.src} alt="" className="w-[48px] h-[48px]" />
            </div>
            <span>{d.title}</span>
          </div>
        ))}
        {/* Duplicate for infinite scroll */}
        {data.map((d, index) => (
          <div className="w-auto min-w-44 md:min-w-64 h-20 md:h-24 flex gap-5 items-center mx-2 md:mx-4 justify-center bg-sky-100 rounded-md">
            <div>
              <img src={d.src} alt="" className="w-[48px] h-[48px]" />
            </div>
            <span>{d.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
