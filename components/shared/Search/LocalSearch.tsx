"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

const LocalSearch = ({
  imgSrc,
  route,
  iconPosition,
  placeholder,
}: {
  imgSrc: string;
  route?: string;
  iconPosition: "left" | "right";
  placeholder: string;
}) => {
  return (
    <div className="relative w-full grow">
      <div
        className={`background-light800_darkgradient relative flex min-h-[56px] items-center gap-1 rounded-xl px-4 ${iconPosition === "left" ? "flex-row" : "flex-row-reverse"}`}
      >
        <Image
          src={imgSrc || "/assets/icons/search.svg"}
          width={24}
          height={24}
          alt="search"
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent shadow-none outline-none"
        />
      </div>
    </div>
  );
};
export default LocalSearch;
