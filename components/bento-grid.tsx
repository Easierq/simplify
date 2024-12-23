import React from "react";

export const BentoGrid: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-2xl text-center mb-4">Quotes</h2>
      <div className="w-full grid auto-rows-[280px] grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
              i === 0 || i === 3 || i === 4 ? "col-span-2" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
