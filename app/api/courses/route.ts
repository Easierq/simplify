// import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/utils/auth";

import { db } from "@/lib/db";
// import { isAdmin } from "@/lib/admin";

export async function POST(req: Request) {
  const session = await getAuthSession();

  try {
    const { title } = await req.json();

    // if (!userId || !isAdmin(userId)) {
    if (!session?.user.isAdmin) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        title,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
