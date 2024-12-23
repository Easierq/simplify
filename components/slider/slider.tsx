"use client";

// package
import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";

// ui
import * as ProductCard from "@/components/card/productCard";

// css
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SliderSkeleton } from "./slider-skeleton";
import { useCardModal } from "@/hooks/use-card-modal";
import { Course } from "@prisma/client";

interface Props {
  courses: Course[];
}

export default function Slider({ courses }: Props) {
  const onOpen = useCardModal((state) => state.onOpen);

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    slides: {
      spacing: 12,
      perView: 1.5,
    },
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 16,
        },
        mode: "free-snap",
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 5,
          spacing: 16,
        },
        mode: "free-snap",
      },
    },
    renderMode: "performance",
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading)
    return (
      <div className="mb-[70px]">
        <div className="mb-3">
          <h1 className="text-lg md:text-xl text-slate-800 dark:text-slate-300 font-bold">
            Recommended 1-on-1 Sessions
          </h1>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-200 font-medium">
            Connect directly with professionals for personalized advise and
            feedbacks
          </p>
        </div>
        <SliderSkeleton />
      </div>
    );

  return (
    <div className="relative mb-[70px]">
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow"
          >
            <ChevronLeft className="h-6 w-6 dark:text-slate-600" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow"
          >
            <ChevronRight className="h-6 w-6 dark:text-slate-600" />
          </button>
        </>
      )}
      <div className="mb-3">
        <h1 className="text-lg md:text-xl text-slate-800 dark:text-slate-300 font-bold">
          Recommended 1-on-1 Sessions
        </h1>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-200 font-medium">
          Connect directly with professionals for personalized advise and
          feedbacks
        </p>
      </div>

      <div ref={slideRef} className="keen-slider min-w-full">
        {courses.map((course) => (
          <div key={course.id} className="keen-slider__slide">
            <ProductCard.Root data={course}>
              <ProductCard.Thumbnail className="rounded-t-lg overflow-hidden">
                <ProductCard.ThumbnailBadge>
                  {/* <ProductCard.Badge>new</ProductCard.Badge> */}
                  {/* <ProductCard.WishlistButton /> */}
                </ProductCard.ThumbnailBadge>

                <ProductCard.Image className="rounded-t-lg" />
              </ProductCard.Thumbnail>

              <ProductCard.Content>
                {/* <ProductCard.Ratings /> */}
                <ProductCard.Name className="dark:text-slate-200" />
                <ProductCard.Price className="dark:text-slate-200" />
              </ProductCard.Content>
              <Button
                variant="outline"
                className="w-max dark:border-slate-200"
                onClick={() => onOpen(course.id)}
              >
                Book Now
              </Button>
            </ProductCard.Root>
          </div>
        ))}
      </div>
    </div>
  );
}
