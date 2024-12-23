"use client";

import { Sun, Moon, MoonIcon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useThemeToggle } from "@/components/theme/useToggle";

import { cn } from "@/lib/utils";

export function ThemeToggle({ className, ...props }: ButtonProps) {
  const { isDark, toggle, hydrated } = useThemeToggle();

  // TODO: fix layout shift from hydration
  if (!hydrated) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("text-2xl rounded-md mr-[6px]", className)}
      // title="Toggle theme"
      // aria-label="Toggle theme"
      {...props}
      onClick={toggle}
    >
      {isDark ? (
        <Sun className="size-[1em] text-slate-100" />
      ) : (
        // <Moon className="size-[1em] fill-current text-slate-500" />
        <MoonIcon className="size-[1em] fill-current text-slate-500" />
      )}
    </Button>
  );
}
