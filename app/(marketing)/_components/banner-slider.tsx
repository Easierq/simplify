"use client";

import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Skeleton } from "@/components/ui/skeleton";

export default function BannerSlider() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading)
    return (
      <div>
        <Skeleton className="w-full h-[140px] md:h-[320px] animate-none" />
      </div>
    );
  return (
    <>
      <div ref={sliderRef} className="keen-slider rounded-md">
        <div className="keen-slider__slide number-slide1">
          <div className="w-full h-auto bg-muted">
            <img
              src="/1.png"
              // src="/slid1.svg"
              alt="banner"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="w-full h-auto bg-muted">
            <img
              src="/2.jpeg"
              // src="/slid2.svg"
              alt="banner"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
