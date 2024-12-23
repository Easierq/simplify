"use client";

import { Loader } from "lucide-react";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center">
      <Loader className="h-10 w-10 text-muted-foreground animate-spin" />
    </div>
  );
};

export default LoadingPage;
