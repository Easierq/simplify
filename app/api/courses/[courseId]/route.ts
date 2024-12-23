// import Mux from "@mux/mux-node";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

import { db } from "@/lib/db";

// const { Video } = new Mux(
//   process.env.MUX_TOKEN_ID!,
//   process.env.MUX_TOKEN_SECRET!
// );

export async function GET(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
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
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    // for (const chapter of course.chapters) {
    //   if (chapter.muxData?.assetId) {
    //     await Video.Assets.del(chapter.muxData.assetId);
    //   }
    // }

    const deletedCourse = await db.course.delete({
      where: {
        id: params.courseId,
      },
    });

    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.log("[COURSE_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  const session = await getAuthSession();

  try {
    const { courseId } = params;
    const values = await req.json();

    if (!session?.user.isAdmin) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.update({
      where: {
        id: courseId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
