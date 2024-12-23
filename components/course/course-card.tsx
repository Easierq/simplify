import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";

import { IconBadge } from "./icon-badge";
import { formatPrice } from "@/lib/format";

import Pulse from "@/app/(marketing)/_components/pulse-animation";

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
}

const isLive = true;
export const CourseCard = () => {
  return (
    <Link href={`/courses/`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-2">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <div className="absolute top-1 z-40 left-1 gap-1 flex rounded-sm items-center justify-center p-1 px-2 bg-slate-100 dark:bg-slate-900">
            <Pulse />
            <p className="text-[10px] font-bold dark:text-slate-100">Online</p>
          </div>
          <Image fill className="object-cover" alt="alt" src="/co.webp" />
        </div>
        <div className="pt-2 pb-1 text-left pr-1 space-y-1">
          <div className="text-lg md:text-base font-medium group-hover:text-purple-700 transition line-clamp-1">
            How to make photoshop literals
          </div>
          <div className="flex text-center justify-between">
            <p className="text-xs text-slate-500 font-extrabold">UI/UX</p>
            <p className="text-xs text-slate-500 font-bold">8 weeks</p>
          </div>
          {/* <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size="sm" icon={BookOpen} />
              <span>
                {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>
          </div> */}
          {/* {progress !== null ? (
            <CourseProgress
              variant={progress === 100 ? "success" : "default"}
              size="sm"
              value={progress}
            />
          ) : ( */}
          <p className="text-md md:text-sm font-bold text-slate-800 dark:text-slate-200">
            ₦{formatPrice(120000)}
          </p>
          {/* )} */}
        </div>
      </div>
    </Link>
  );
};
