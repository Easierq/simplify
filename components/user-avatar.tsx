"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src?: string;
  className?: string;
}

export const UserAvatar = ({ src, className }: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-8 w-8 bg-slate-300 cursor-pointer", className)}>
      <AvatarImage src={src} />
    </Avatar>
  );
};
