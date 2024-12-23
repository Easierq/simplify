import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pulse from "./pulse-animation";
import { CoursesList } from "@/components/course/courses-list";

export const HeroTab = () => {
  return (
    <div className="my-6 w-full">
      <h2 className="font-semibold text-2xl text-center mb-3">Courses</h2>
      <Tabs defaultValue="account" className="w-full">
        {/* <TabsList className="border border-black bg-slate-50"> */}
        <TabsList className="bg-slate-200">
          <TabsTrigger value="account" className="px-6">
            Video courses
          </TabsTrigger>
          <TabsTrigger value="password" className="px-6 flex gap-2">
            <Pulse />
            Online classes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <CoursesList />
        </TabsContent>
        <TabsContent value="password">
          <CoursesList />
        </TabsContent>
      </Tabs>
    </div>
  );
};
