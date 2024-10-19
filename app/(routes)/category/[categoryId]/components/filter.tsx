"use client";
import { Color, Size } from "@/type";
import { useSearchParams, useRouter } from "next/navigation";
import React from "react";
import qs from "query-string";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  filterKey: string;
  data: (Size | Color)[];
  name: string;
}

const Filter: React.FC<FilterProps> = ({ filterKey, data, name }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(filterKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [filterKey]: id,
    } 

    if (current[filterKey] === id) {
      query[filterKey] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipNull: true});

    router.push(url);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        {name}
      </h3>
      <hr className="my-4"/>
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button 
              onClick={() => onClick(filter.id)}
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectedValue === filter.id && "bg-black text-white"
            )}>
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Filter;
