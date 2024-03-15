"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SearchFilters } from "@/types";
import { useState } from "react";

const Filter = ({ filters }: { filters: SearchFilters }) => {
  const [active, setActive] = useState("frequent");

  return (
    <>
      <div className="flex-start flex w-full gap-4 max-sm:hidden">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            className={`${active === filter.value ? "bg-primary-100 text-primary-500" : "text-light400_light500 background-light800_dark300 "} rounded-xl px-4 py-2 shadow-light-300 dark:shadow-none`}
            onClick={() => {
              setActive(filter.value);
            }}
          >
            {filter.name}
          </Button>
        ))}
      </div>
      <div className="hidden w-full max-sm:flex">
        <Select
          onValueChange={(value) => {
            setActive(value);
          }}
        >
          <SelectTrigger className="background-light800_dark300 text-dark300_light700 min-h-[56px] rounded-xl border-0 px-4 shadow-light-300 dark:shadow-none">
            <SelectValue placeholder="Filter by..." />
          </SelectTrigger>
          <SelectContent className="body-medium light-border rounded-xl">
            {filters.map((filter) => (
              <SelectItem
                value={filter.value}
                key={filter.value}
                className={`focus:background-light800_dark300 ${active === filter.value ? "text-primary-500" : "text-dark300_light700"} rounded-xl py-4`}
              >
                {filter.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
export default Filter;
