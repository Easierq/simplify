// import { BentoDemo } from "@/components/bento-features";
// import { Icons } from "@/components/icons";
// import BlurIn from "@/components/magicui/blur-in";
// import { BorderBeam } from "@/components/magicui/border-beam";
// import ShineBorder from "@/components/magicui/shine-border";
// import { Companies } from "@/components/social-proof";

// import { CarouselList } from "@/components/course/caro-list";
// import Slider from "@/components/slider/Slider";
import Slider from "@/components/slider/slider";
import BannerSlider from "./_components/banner-slider";
import { db } from "@/lib/db";
import Testimonials from "./_components/testimonials";

// import { buttonVariants } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import Link from "@/node_modules/next/link";
// import React from "react";
// import { HeroTab } from "./_components/hero-tabs";
// import { BentoGrid } from "@/components/bento-grid";

async function HeroPage() {
  const courses = await db.course.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      {/* <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
        <div className="flex max-w-[64rem] mx-auto flex-col items-center gap-4 text-center sm:mb-10 lg:mb-12">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-20">
            Infusing Wisdom into Your Every Mood
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Popular Quotes for all categories from millions of books, people,
            and authors.
          </p>
          <div className="flex items-center gap-2 px-4">
            <Link
              href="/login"
              className={cn(buttonVariants({ size: "lg" }), "font-semibold")}
            >
              Get Started
            </Link>
            <Link
              href="/#features"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-sm-2"
              )}
            >
              Let&apos;s Explore
            </Link>
          </div>
          <div className="relative rounded-xl justify-center flex flex-col items-center mt-8">
            <img
              src="/temp.png"
              alt="Hero Image"
              className="rounded-[inherit] border object-contain shadow-lg"
            />
          </div>
          <HeroTab />
          <BentoGrid />
        </div>
      </section> */}
      <section id="open-source" className="py-8 md:py-12">
        <div className="pt-[-10px]">
          <h1 className="text-2xl md:text-3xl text-slate-900 dark:text-slate-300 mb-2">
            Welcome back 😎,
          </h1>
          <div className="mb-7 md:mb-6">
            <BannerSlider />
          </div>
          <Slider courses={courses} />
          <Testimonials />
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mt-10">
            <h2 className="text-slate-800 dark:text-slate-300 text-3xl font-semibold sm:text-4xl">
              Simplify - Unlock the Wisdom
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Let&apos;s Try Now -{" "}
              <a href="/login" className="underline underline-offset-4">
                Get Started
              </a>
              .{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;
