// import { getAuthSession } from "@/utils/auth";

// import { db } from "@/lib/db";
// import { NextResponse } from "next/server";

// export async function GET(
//   req: Request,
//   { params }: { params: { courseId: string; userId: string } }
// ) {
//   const { courseId, userId } = params;

//   if (!userId || !courseId) {
//     return new NextResponse("User ID and Course ID are required.", {
//       status: 400,
//     });
//   }

//   try {
//     const purchase = await db.access.findFirst({
//       where: {
//         userId: String(userId),
//         courseId: String(courseId),
//         paymentConfirmed: true,
//       },
//     });

//     if (purchase) {
//       return NextResponse.json({ accessGranted: true });
//     }

//     return NextResponse.json({
//       accessGranted: false,
//       message: "Access denied.",
//     });
//   } catch (error) {
//     return NextResponse.json({ message: "Error checking access.", error });
//   }
// }

import { db } from "@/lib/db"; // Import your database client
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Parse query parameters from the request URL
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");
  const courseId = url.searchParams.get("courseId");
  // console.log(courseId, userId);

  // Validate input
  //   if (!userId || !courseId) {
  if (!userId?.trim() || !courseId?.trim()) {
    return NextResponse.json(
      { message: "User ID and Course ID are required." },
      { status: 400 }
    );
  }

  try {
    // Check if the user has a confirmed purchase for the course
    const purchase = await db.access.findFirst({
      where: {
        userId,
        courseId,
        paymentConfirmed: true,
      },
    });

    // Respond with access status
    return NextResponse.json({
      accessGranted: !!purchase,
      message: purchase ? "Access granted." : "Access denied.",
    });
  } catch (error) {
    console.error("Error checking access:", error);
    return NextResponse.json(
      { message: "Error checking access.", error },
      { status: 500 }
    );
  }
}
