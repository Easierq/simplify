// import { Category, Course } from "@prisma/client";

import { CourseCard } from "./course-card";

const items = [1, 2, 3, 4];
// type CourseWithProgressWithCategory = Course & {
//   category: Category | null;
//   chapters: { id: string }[];
//   progress: number | null;
// };

// interface CoursesListProps {
//   items: CourseWithProgressWithCategory[];
// }

export const CoursesList = () => {
  return (
    <div className="mt-6">
      {/* <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4"> */}
      <div className="grid gap-4 gap-y-8 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
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
  );
};
