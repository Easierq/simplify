import React from "react";
import Link from "next/link";
export const dynamic = "force-dynamic";
export const revalidate = 0; // Ensure no caching
import { BookOpen } from "lucide-react";
import { Add } from "@/components/icons";
import { db } from "@/lib/db";

const AdminPage = async () => {
  const courses = await db.course.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="py-10">
      <div className="space-y-4">
        <div className="flex items-center font-semibold text-lg md:text-xl text-neutral-700 dark:text-slate-300">
          <BookOpen className="h-6 w-6 mr-2" />
          My courses
        </div>
        <p className="font-semibold text-sm text-slate-500 dark:text-slate-200">
          Click the{" "}
          <span className="text-slate-800 dark:text-slate-300">
            "Create new course"
          </span>{" "}
          to add new course/Click course to edit it.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/create-course"
            role="button"
            className="aspect-video relative h-[200px] w-full bg-slate-100 dark:bg-slate-600 border-dashed border-2 border-slate-500 dark:border-slate-300  rounded-md flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
          >
            <Add className=" text-slate-900 dark:text-slate-200" />
            <p className="text-sm font-bold">Create new course</p>
          </Link>
          {courses.map((course) => (
            <Link
              href={`/admin/courses/${course.id}`}
              key={course.id}
              className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-md h-[200px] w-full p-2 overflow-hidden"
              style={{ backgroundImage: `url(${course.imageUrl})` }}
              // style={{ backgroundImage: `url(${course.image.src})` }}
              // style={{ backgroundImage: "url(/lap.jpg" }}
            >
              <h2 className="absolute bottom-2 text-xl font-black text-white">
                {course.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
