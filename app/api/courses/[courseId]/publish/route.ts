import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuthSession } from "@/utils/auth";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  const session = await getAuthSession();
  try {
    if (!session?.user.isAdmin) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
      },
      // include: {
      //   chapters: {
      //     include: {
      //       muxData: true,
      //     },
      //   },
      // },
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    // const hasPublishedChapter = course.chapters.some((chapter) => chapter.isPublished);

    // if (!course.title || !course.description || !course.imageUrl || !course.categoryId || !hasPublishedChapter) {
    //   return new NextResponse("Missing required fields", { status: 401 });
    // }

    const publishedCourse = await db.course.update({
      where: {
        id: params.courseId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedCourse);
  } catch (error) {
    console.log("[COURSE_ID_PUBLISH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
