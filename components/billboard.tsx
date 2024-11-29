"use client"
import { cn } from "@/lib/utils";
import { Billboard as BillboardType } from "@/type";
import React from "react";

interface BillboardProps {
  data: BillboardType;
  dark?: boolean;
  hasLabel?: boolean;
}

const Billboard: React.FC<BillboardProps> = ({ data, dark = false, hasLabel = true }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-[4/1] md:aspect-[3/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          {hasLabel && <div className={cn(
            "font-bold  text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs"
            , dark ? "text-gray-900" : "text-white"
          )}>
            {data.label}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Billboard;
