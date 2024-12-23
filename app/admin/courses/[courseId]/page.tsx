import { db } from "@/lib/db";
import CourseTab from "./_components/course-tab";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  // const categories = await db.category.findMany({
  //   orderBy: {
  //     name: "asc",
  //   },
  // });

  return (
    <div className="h-full">
      <CourseTab
        // isComplete={isComplete}
        // completionText={completionText}
        course={course}
        params={params}
      />
    </div>
  );
};

export default CourseIdPage;
