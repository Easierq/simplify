"use client";

import { CourseCard } from "@/components/course/course-card";

const items = [1, 2, 3, 4, 5, 6];

const SearchPage = () => {
  return (
    <div className="pt-10 pb-[100px]">
      <div className="mb-10">
        <h1 className="text-2xl font-medium">Search results for blabla</h1>
      </div>
      <div className="mt-6">
        {/* <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4"> */}
        <div className="grid gap-4 gap-y-8 md:gap-5 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
          {items.map((item, index) => (
            <CourseCard
              key={index}
              // id={item.id}
              // title={item.title}
              // imageUrl={item.imageUrl!}
              // chaptersLength={item.chapters.length}
              // price={item.price!}
              // progress={item.progress}
              // category={item?.category?.name!}
            />
          ))}
        </div>
        {items.length === 0 && (
          <div className="text-center text-sm text-muted-foreground mt-10">
            No courses found
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
