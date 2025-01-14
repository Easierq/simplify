import { db } from "@/lib/db";
import { AccessForm } from "./_components/access-form";

const AccessPage = async () => {
  const users = await db.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const courses = await db.course.findMany({
    where: {
      isPublished: true,
      isFree: false,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">
          Access granting page
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Please cross check user and the respective course before granting
          access.
        </p>
        <AccessForm users={users} courses={courses} />
      </div>
    </div>
  );
};

export default AccessPage;
