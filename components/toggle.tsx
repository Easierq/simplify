// "use client";

// import * as React from "react";
// import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";
// import { useTheme } from "next-themes";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { cn } from "@/lib/utils";

// export function ModeToggle() {
//   const { setTheme, theme } = useTheme();
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => setIsClient(true), []);
//   if (!isClient) return null;

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           // size="icon"
//           className="border-none items-center justify-center hidden md:flex bg-transparent p-0 hover:bg-transparent"
//         >
//           <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       {theme === "light" ? (
//         <DropdownMenuContent align="end">
//           <DropdownMenuItem onClick={() => setTheme("dark")}>
//             Dark
//             <MoonIcon className="h-[1rem] w-[1rem] ml-auto" />
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setTheme("light")}>
//             Light <SunIcon className="h-[1rem] w-[1rem] ml-auto" />
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       ) : (
//         <DropdownMenuContent align="end">
//           <DropdownMenuItem onClick={() => setTheme("light")}>
//             Light <SunIcon className="h-[1rem] w-[1rem] ml-auto" />
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => setTheme("dark")}>
//             Dark
//             <MoonIcon className="h-[1rem] w-[1rem] ml-auto" />
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       )}
//     </DropdownMenu>
//   );
// }

"use client";

import { Sun, MoonIcon, Moon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useThemeToggle } from "@/components/theme/useToggle";

import { cn } from "@/lib/utils";

export function ModeToggle({ className, ...props }: ButtonProps) {
  const { isDark, toggle, hydrated } = useThemeToggle();

  // TODO: fix layout shift from hydration
  if (!hydrated) return null;

  return (
    <div
      // variant="ghost"
      // size="icon"
      className="hidden md:flex items-center justify-center rounded-full p-[2px] ml-[-4px]"

      // title="Toggle theme"
      // aria-label="Toggle theme"
      // onClick={toggle}
    >
      {isDark ? (
        <Sun
          className="h-7 w-7 cursor-pointer text-slate-950 dark:text-slate-200 hover:text-slate-600 dark:hover:text-slate-50"
          onClick={toggle}
        />
      ) : (
        // <Moon className="size-[1em] fill-current text-slate-500" />
        <MoonIcon
          className="w-7 h-7 cursor-pointer text-slate-950 dark:text-slate-200 hover:text-slate-600 dark:hover:text-slate-50"
          onClick={toggle}
        />
      )}
    </div>
  );
}
