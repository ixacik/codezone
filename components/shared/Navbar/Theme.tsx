"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants/constants";

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === "light" ? (
            <Image
              src="/assets/icons/sun.svg"
              width={20}
              height={20}
              alt="sun"
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              width={20}
              height={20}
              alt="moon"
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="background-light900_dark200 absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400">
          {themes.map((theme) => (
            <MenubarItem
              key={theme.value}
              onClick={() => {
                setMode(theme.value);

                if (theme.value !== "system") {
                  localStorage.theme = theme.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
              className="focus:background-light800_dark400 flex items-center gap-4 px-2.5 py-2"
            >
              <Image
                src={theme.icon}
                width={16}
                height={16}
                alt={theme.value}
                className={`${mode === theme.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${mode === theme.value ? "text-primary-500" : "text-dark100_light900"}`}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
export default Theme;
