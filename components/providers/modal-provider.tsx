"use client";

import { useEffect, useState } from "react";

import { CourseModal } from "@/components/modals/course-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CourseModal />
    </>
  );
};
