"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Access, Account, Course, Session, User } from "@prisma/client";

const mama = [
  {
    id: "uueueuue",
    title: "mymy",
  },
  { id: "wwww", title: "mymy" },
];

const formSchema = z.object({
  userId: z.string().min(1, {
    message: "UserId is required",
  }),
  courseId: z.string().min(1, {
    message: "CourseId is required",
  }),
});

interface AccessProp {
  users: User[];
  courses: Course[];
}

export const AccessForm = ({ users, courses }: AccessProp) => {
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: "",
      courseId: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmitGrant = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/access/grant", values);
      toast({
        variant: "default",
        description: "Access enabled successfully",
      });
    } catch {
      toast({
        variant: "destructive",
        description: "Something went wrong.",
      });
    }
  };

  const onSubmitUnGrant = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/access/ungrant", values);
      toast({
        variant: "default",
        description: "Access disabled successfully",
      });
    } catch {
      toast({
        variant: "destructive",
        description: "Something went wrong.",
      });
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmitGrant)}
          className="space-y-8 mt-8"
        >
          <FormField
            control={form.control}
            name="userId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select user</FormLabel>
                <Select
                  disabled={isSubmitting}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="select a user"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Users email</SelectLabel>
                      {users.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.email}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="courseId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select course</FormLabel>
                <Select
                  disabled={isSubmitting}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="select a course"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Courses</SelectLabel>
                      {courses.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.title}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-x-2">
            <Button type="submit" disabled={!isValid || isSubmitting}>
              Grant access
            </Button>
            <div>
              <Button
                onClick={async () => {
                  const values = form.getValues();
                  try {
                    await onSubmitUnGrant(values);
                  } catch {
                    toast({
                      variant: "destructive",
                      description: "Something went wrong.",
                    });
                  }
                }}
                type="button"
                variant="destructive"
                disabled={!isValid || isSubmitting}
              >
                Disallow access
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};
