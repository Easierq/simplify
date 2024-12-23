"use client";
import qs from "query-string";
import { useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "@/node_modules/next/link";
import { cn } from "@/lib/utils";
import { SheetClose } from "./ui/sheet";

const NavbarSearch = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: "" },
      },
      { skipEmptyString: true }
    );
    router.push(url);
    setOpen(false);
  };
  const onClear = () => {
    setValue("");
  };
  return (
    <div className="mx-auto w-full flex flex-col lg:max-w-[1000px] items-center pt-[120px]">
      <h1 className="uppercase text-2xl mb-8 text-center font-semibold text-slate-500 max-w-[80vw]">
        What course are you looking for?
      </h1>
      <form
        onSubmit={onSubmit}
        className="relative w-[85%] md:w-[70%] flex border-b border-slate-400 dark:border-slate-100"
      >
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="SEARCHING FOR....."
          className="w-full font-medium text-base rounded-r-none border-none ring-0 focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 px-0"
        />
        {value && (
          <X
            className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
            onClick={onClear}
          />
        )}
        <Button
          type="submit"
          variant="secondary"
          size="sm"
          className="rounded-l-none bg-transparent hover:bg-transparent"
        >
          <SearchIcon className="h-5 w-5 text-slate-400 dark:text-slate-100" />
        </Button>
      </form>
      <div className="flex items-center justify-center flex-col md:flex-row mt-8">
        <p className="hidden text-sm md:block font-semibold italic mb-1 md:mb-0">
          Popular Searches:
        </p>
        <p className="text-sm md:hidden font-semibold italic mb-1 md:mb-0">
          Popular Searches
        </p>
        <div className="ml-3 flex gap-2">
          <SheetClose>
            <Link
              href={`/search`}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "px-4 h-7 text-[10px] font-bold"
              )}
            >
              Adobe XD
            </Link>
          </SheetClose>
          <SheetClose>
            <Link
              href={`/search`}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "px-4 h-7 text-[10px] font-bold"
              )}
            >
              Figma
            </Link>
          </SheetClose>
          <SheetClose>
            <Link
              href={`/search`}
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "px-4 h-7 text-[10px] font-bold"
              )}
            >
              Photoshop
            </Link>
          </SheetClose>
        </div>
      </div>
    </div>
  );
};

export default NavbarSearch;
