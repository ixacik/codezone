"use client";

import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex size-full w-full flex-col gap-6 pt-32 ">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <>
            <Link
              href={link.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex w-full items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={link.imgURL}
                width={20}
                height={20}
                alt={link.label}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`max-lg:hidden`}>{link.label}</p>
            </Link>
          </>
        );
      })}
    </section>
  );
};

const LeftSidebar = () => {
  return (
    <aside className="flex-between background-light900_dark200 sticky z-40 h-screen w-[266px] flex-col px-6 py-8 max-lg:w-fit max-lg:px-2 max-sm:hidden">
      <div className="w-full">
        <NavContent />
      </div>
      <SignedOut>
        <div className="flex w-full flex-col gap-3 max-lg:hidden">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-6 shadow-none">
              <span className="primary-text-gradient">Log in</span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg border px-4 py-6 shadow-none">
              <span className="text-dark100_light900">Sign up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </aside>
  );
};
export default LeftSidebar;
