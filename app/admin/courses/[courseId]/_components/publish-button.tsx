"use client";

import axios from "axios";
import { Trash } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";
// import { useConfettiStore } from "@/hooks/use-confetti-store";

interface ActionsProps {
  showDelete?: boolean;
  showPublish?: boolean;
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
}

export const PublishButton = ({
  showDelete,
  showPublish,
  disabled,
  courseId,
  isPublished,
}: ActionsProps) => {
  const router = useRouter();
  // const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success("Course unpublished");
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast.success("Course published");
        // confetti.onOpen();
      }

      router.push("/admin");
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setIsLoading(true);

      await axios.delete(`/api/courses/${courseId}`);

      toast.success("Course deleted");
      router.refresh();
      router.push(`/teacher/courses`);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={onClick}
        disabled={disabled || isLoading}
        variant="default"
        size="sm"
        className="w-[60%] py-5 disabled:bg-gray-400 disabled:cursor-not-allowed 
         dark:disabled:bg-gray-600 dark:disabled:text-gray-300"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      {/* <ConfirmModal onConfirm={onDelete}>
        {showDelete && (
          <Button size="sm" disabled={isLoading}>
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </ConfirmModal> */}
    </div>
  );
};
