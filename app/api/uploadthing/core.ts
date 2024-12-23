import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getAuthSession } from "@/utils/auth";

const f = createUploadthing();

const handleAuth = async () => {
  const session = await getAuthSession();

  if (!session || !session.user.isAdmin) throw new Error("Unauthorized");
  return { userId: session.user.id };
};

export const ourFileRouter = {
  courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => {
      const user = await handleAuth();
      if (!user) throw new Error("Unauthorized");
      return { userId: user.userId };
    })
    .onUploadComplete(() => {}),
  courseAttachment: f(["text", "image", "video", "audio", "pdf"])
    .middleware(async () => {
      const user = await handleAuth();
      if (!user) throw new Error("Unauthorized");
      return { userId: user.userId };
    })
    .onUploadComplete(() => {}),
  chapterVideo: f({ video: { maxFileCount: 1, maxFileSize: "512GB" } })
    .middleware(async () => {
      const user = await handleAuth();
      if (!user) throw new Error("Unauthorized");
      return { userId: user.userId };
    })
    .onUploadComplete(() => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
