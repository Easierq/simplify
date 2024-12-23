import { Search } from "lucide-react";
import React from "react";

const SearchForm = () => {
  return (
    <div className="hidden md:flex h-8 group px-2 py-2 pr-14 rounded-md items-center gap-x-2 w-full bg-slate-200 dark:bg-slate-200/45 hover:bg-slate-200 dark:hover:bg-muted/2 transition">
      <Search className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
      <p className="font-semibold text-sm text-zinc-500 dark:text-zinc-200 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
        Search
      </p>
    </div>
  );
};

export default SearchForm;
