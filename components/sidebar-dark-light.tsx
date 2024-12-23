"use client";

import { Sun, MoonIcon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useThemeToggle } from "@/components/theme/useToggle";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

export function MobileDarkLight({ className, ...props }: ButtonProps) {
  const { hydrated } = useThemeToggle();
  const { setTheme } = useTheme();

  // TODO: fix layout shift from hydration
  if (!hydrated) return null;

  return (
    <div className="flex items-center gap-4 border-slate-500 dark:border-slate-200 border-2 px-2 py-1 rounded-2xl">
      {/* <Button
        variant="ghost"
        size="icon"
        className={cn(
          "flex items-center justify-center rounded-md ml-[-8px] p-0",
          className
        )}
        // title="Toggle theme"
        // aria-label="Toggle theme"
        {...props}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon className="w-8 h-8" />
      </Button> */}
      <MoonIcon
        className="w-6 h-6 cursor-pointer"
        onClick={() => setTheme("dark")}
      />
      {/* <Button
        variant="ghost"
        size="icon"
        className={cn(
          "flex items-center justify-center rounded-md ml-[-8px] p-0",
          className
        )}
        // title="Toggle theme"
        // aria-label="Toggle theme"
        {...props}
        onClick={() => setTheme("light")}
      >
        <Sun className="h-8 w-8" />
      </Button> */}
      <Sun
        className="h-6 w-6 cursor-pointer"
        onClick={() => setTheme("light")}
      />
    </div>
  );
}
