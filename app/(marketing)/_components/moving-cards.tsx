"use client";

// import { useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    src: "/sliding/ps-w.svg",
    title: "Photoshop",
  },
  {
    id: 2,
    title: "Figma",
    src: "/sliding/fg-wh.svg",
  },
  {
    id: 3,
    title: "Adobe XD",
    src: "/sliding/xd-w.svg",
  },
  {
    id: 4,
    title: "Generative AI",
    src: "/sliding/aii.svg",
  },
  {
    id: 5,
    title: "Adobe illustrator",
    src: "/sliding/ill-w.svg",
  },
];

// const datad = [
//   {
//     id: 1,
//     src: "/sliding/ps.svg",
//     title: "Photoshop",
//   },
//   {
//     id: 2,
//     title: "Figma",
//     src: "/sliding/fg.svg",
//   },
//   {
//     id: 3,
//     title: "Adobe XD",
//     src: "/sliding/xd.svg",
//   },
//   {
//     id: 4,
//     title: "GEnerative AI",
//     src: "/sliding/ai.svg",
//   },
//   {
//     id: 5,
//     title: "Adobe illustrator",
//     src: "/sliding/ill.svg",
//   },
// ];

export default function InfiniteHorizontalScroll() {
  return (
    <div className="relative w-full h-auto mb-5 md:mb-10 overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] dark:before:bg-[linear-gradient(to_right,black_0%,rgba(0,0,0,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] dark:after:bg-[linear-gradient(to_right,black_0%,rgba(0,0,0,0)_100%)] after:content-['']">
      <div className="flex animate-scroll whitespace-nowrap">
        {data.map((d, index) => (
          <div
            key={index}
            className="w-auto min-w-max h-20 md:h-22 px-3 md:px-5 flex gap-2 md:gap-3 items-center mx-2 md:mx-4 justify-center"
          >
            <div>
              <img
                src={d.src}
                alt=""
                className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
              />
            </div>
            <span className="font-bold text-gray-500 dark:text-slate-600">
              {d.title}
            </span>
          </div>
        ))}

        {/* Duplicate for infinite scroll */}
        {data.map((d, index) => (
          <div
            key={index}
            className="w-auto min-w-max h-20 md:h-22 px-3 md:px-5 flex gap-2 md:gap-3 items-center mx-2 md:mx-4 justify-center"
          >
            <div>
              <img
                src={d.src}
                alt=""
                className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
              />
            </div>
            <span className="font-bold text-gray-500 dark:text-slate-600">
              {d.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
