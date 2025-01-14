import { getAuthSession } from "@/utils/auth";

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getAuthSession();

  try {
    // Check if the user is an admin
    if (!session?.user?.isAdmin) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Parse the request body
    const { userId, courseId } = await req.json();

    if (!userId || !courseId) {
      return new NextResponse("User ID and Course ID are required.", {
        status: 400,
      });
    }

    // Update or create the purchase record
    const purchase = await db.access.upsert({
      where: { userId_courseId: { userId, courseId } },
      update: { paymentConfirmed: true },
      create: {
        userId,
        courseId,
        paymentConfirmed: true,
      },
    });

    return NextResponse.json({ accessGranted: true, purchase });
  } catch (error) {
    console.error("[CONFIRM_PAYMENT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
