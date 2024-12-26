"use client";

import React, { useState } from "react";

import {
  ArrowLeft,
  CircleDollarSign,
  File,
  LayoutDashboard,
  ListChecks,
} from "lucide-react";
import { IconBadge } from "@/components/icon-badge";
import { Banner } from "@/components/banner";

import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { db } from "@/lib/db";

import LoadingPage from "@/components/loading-page";
import { TitleForm } from "./title-form";
import { DescriptionForm } from "./description-form";
import { ImageForm } from "./image-form";
import { PriceForm } from "./price-form";

import { Actions } from "./actions";
// import { CategoryForm } from "./category-form";
// import { AttachmentForm } from "./attachment-form";
// import { ChaptersForm } from "./chapters-form";
import { Attachment, Chapter, Course } from "@prisma/client";
import { PublishButton } from "./publish-button";
import Link from "next/link";
import { CalenderForm } from "./calender-form";

type CourseWithRelations = Course & {
  chapters: Chapter[];
  attachments: Attachment[];
};

interface LiveSessionTabProps {
  params: { courseId: string };
  completionText: string;
  isComplete: boolean;
  course: Course;
}

interface VideoCourseTabProps {
  params: { courseId: string };
  completionText: string;
  isComplete: boolean;
  course: Course;
}

interface CourseTabProps {
  params: { courseId: string };
  course: CourseWithRelations | null;
  // course: Course | null;
  // completionText: string;
  // isComplete: boolean;
}

const CourseTab = ({
  params,
  course,
}: // completionText,
// isComplete,
CourseTabProps) => {
  const [activeTab, setActiveTab] = useState("Live Session");

  const { status, data: session } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <LoadingPage />;
  }
  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  if (!course) {
    return redirect("/");
  }

  const requiredFields = [
    course.title,
    course.description,
    course.calenderLink,
    course.imageUrl,
    course.price,
    // course.categoryId,
    //  course.chapters.some((chapter) => chapter.isPublished),
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <div className="py-10">
      <div className="space-y-3">
        <Link href="/admin">
          <ArrowLeft />
        </Link>
        <h1 className="text-2xl font-medium">Course setup</h1>
        <div className="flex gap-2 w-max bg-gray-100/50 rounded-md overflow-hidden">
          <button
            onClick={() => setActiveTab("Live Session")}
            className={`py-2 px-4 text-sm text-gray-600 rounded-md  focus:outline-none ${
              activeTab === "Live Session"
                ? "bg-gray-300 font-semibold text-gray-700"
                : ""
            }`}
          >
            Live Session
          </button>
          <button
            onClick={() => setActiveTab("Video Course")}
            className={`py-2 px-4 text-sm text-gray-600 rounded-md focus:outline-none ${
              activeTab === "Video Course"
                ? "bg-gray-300  font-semibold text-gray-700"
                : ""
            }`}
          >
            Video Course
          </button>
        </div>
        {/* <AttachmentForm initialData={course} courseId={course.id} /> */}

        {/* Tab Content */}
        <div className="text-lg text-gray-700">
          {activeTab === "Live Session" ? (
            <LiveSessionTab
              isComplete={isComplete}
              completionText={completionText}
              course={course}
              params={params}
            />
          ) : (
            // <VideoCourseTab
            //   isComplete={isComplete}
            //   completionText={completionText}
            //   course={course}
            //   params={params}
            // />
            <p className="text-3xl uppercase">coming soon</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Example custom tab component
const LiveSessionTab = ({
  course,
  isComplete,
  completionText,
  params,
}: LiveSessionTabProps) => (
  <>
    <div className="pt-1">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-slate-700 dark:text-slate-300">
            Complete all fields {completionText}
          </span>
        </div>
        <Actions
          showDelete={true}
          showPublish={false}
          disabled={!isComplete}
          courseId={params.courseId}
          isPublished={course.isPublished}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <TitleForm initialData={course} courseId={course.id} />
          <DescriptionForm initialData={course} courseId={course.id} />
          <ImageForm initialData={course} courseId={course.id} />
        </div>
        <div className="space-y-6">
          <div></div>
          <div>
            <CalenderForm initialData={course} courseId={course.id} />
            <PriceForm initialData={course} courseId={course.id} />
          </div>
          <div></div>
          <div className="flex flex-col">
            <PublishButton
              showDelete={false}
              showPublish={true}
              disabled={!isComplete}
              courseId={params.courseId}
              isPublished={course.isPublished}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);

const VideoCourseTab = ({
  course,
  isComplete,
  completionText,
  params,
}: VideoCourseTabProps) => (
  <>
    {!course.isPublished && (
      <Banner label="This course is unpublished. It will not be visible to the students." />
    )}
    <div className="pt-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">Course setup</h1>
          <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span>
        </div>
        <Actions
          disabled={!isComplete}
          courseId={params.courseId}
          isPublished={course.isPublished}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        <div>
          <div className="flex items-center gap-x-2">
            <IconBadge icon={LayoutDashboard} />
            <h2 className="text-xl">Customize your course</h2>
          </div>
          <TitleForm initialData={course} courseId={course.id} />
          <DescriptionForm initialData={course} courseId={course.id} />
          <ImageForm initialData={course} courseId={course.id} />
          {/* <CategoryForm
            initialData={course}
            courseId={course.id}
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
          /> */}
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={ListChecks} />
              <h2 className="text-xl">Course chapters</h2>
            </div>
            {/* <ChaptersForm initialData={course} courseId={course.id} /> */}
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={CircleDollarSign} />
              <h2 className="text-xl">Sell your course</h2>
            </div>
            <PriceForm initialData={course} courseId={course.id} />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={File} />
              <h2 className="text-xl">Resources & Attachments</h2>
            </div>
            {/* <AttachmentForm initialData={course} courseId={course.id} /> */}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CourseTab;
