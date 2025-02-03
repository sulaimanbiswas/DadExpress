"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ThemeContext } from "@/theme/theme-context";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { SiMeta } from "react-icons/si";

const Sidebar = () => {
  const { collapse } = useContext(ThemeContext);
  const isActive = false;
  const isSubMenuExpand = true;
  return (
    <aside
      className={cn(
        "fixed w-[240px] flex-shrink-0 overflow-hidden border-r border-[#e4e6eb] bg-white pt-1.5 transition-all duration-300 md:relative",
        collapse && "w-0 md:w-16",
      )}
    >
      {!collapse && (
        <div className="flex flex-col gap-3 border-b border-[#e4e6eb] p-[18px] pr-5 pt-3.5">
          <div className="flex w-full cursor-pointer flex-col justify-between gap-2 rounded-md bg-[#f5f6f7] px-2 py-2 font-medium">
            <Image
              className="h-[22px] w-[22px] dark:invert"
              src="/usa.svg"
              alt="Next.js logo"
              width={40}
              height={40}
              priority
            />
            <div className="flex justify-between">
              <div>Balance:</div>
              <div>$ 2,28</div>
            </div>
          </div>
          <Button className="h-8 bg-pink-200/50 text-xs font-medium text-pink-500 hover:bg-pink-200/60">
            Top up the balance
          </Button>
        </div>
      )}
      <ScrollArea className="h-[calc(100vh-205px)] overflow-y-auto transition-all duration-300">
        <div
          className={cn(
            "transition-all hover:bg-gray-100",
            isActive && "bg-gray-100 transition-all",
          )}
        >
          <Link href="/dashboard" className="">
            <div className="flex h-12 items-center">
              <div className="flex w-16 items-center justify-center">
                <LayoutDashboard
                  className={cn("text-gray-400", isActive && "text-primary")}
                  size={20}
                />
              </div>
              <span
                className={cn(
                  "text-sm font-medium text-gray-950",
                  isActive && "text-primary",
                )}
              >
                Dashboard
              </span>
            </div>
          </Link>
        </div>
        <div
          className={cn(
            "transition-all hover:bg-gray-100",
            isActive && "bg-gray-100 transition-all",
          )}
        >
          <Link href="/accounts" className="">
            <div className="flex h-12 items-center">
              <div className="flex w-16 items-center justify-center">
                <SiMeta
                  className={cn("text-gray-400", isActive && "text-primary")}
                  size={20}
                />
              </div>
              <span
                className={cn(
                  "text-sm font-medium text-gray-950",
                  isActive && "text-primary",
                )}
              >
                Ad Accounts
              </span>
            </div>
          </Link>
        </div>
        <div
          className={cn(
            "transition-all hover:bg-gray-100",
            isActive && "bg-gray-100 transition-all",
          )}
        >
          <div className="relative flex h-12 items-center justify-between">
            <div className="flex items-center">
              <div className={cn("flex w-16 items-center justify-center")}>
                <div className="absolute top-6 h-8 w-9 bg-gray-100"></div>
                <div
                  className={cn(
                    isSubMenuExpand &&
                      "z-50 flex h-9 w-9 items-center justify-center rounded-full bg-gray-400",
                  )}
                >
                  <IoWalletOutline
                    className={cn(
                      "text-gray-400",
                      isSubMenuExpand && "text-primary-foreground",
                    )}
                    size={20}
                  />
                </div>
              </div>
              <span
                className={cn(
                  "text-sm font-medium text-gray-950",
                  isActive && "text-primary",
                )}
              >
                Finance
              </span>
            </div>
            <div className="flex items-center pr-5">
              <IoIosArrowUp className="text-gray-600" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div
            className={cn(
              "transition-all hover:bg-gray-100",
              isActive && "bg-gray-100 transition-all",
            )}
          >
            <Link href="/" className="">
              <div className="flex h-10 items-center">
                <div className="flex w-16 items-center justify-center">
                  <div className="z-10 flex h-10 w-9 items-center justify-center bg-gray-100">
                    <LayoutDashboard
                      className={cn(
                        "text-gray-400",
                        isActive && "text-primary",
                      )}
                      size={20}
                    />
                  </div>
                </div>
                <span
                  className={cn(
                    "text-sm font-medium text-gray-950",
                    isActive && "text-primary",
                  )}
                >
                  Dashboard
                </span>
              </div>
            </Link>
          </div>
          <div
            className={cn(
              "transition-all hover:bg-gray-100",
              isActive && "bg-gray-100 transition-all",
            )}
          >
            <Link href="/" className="">
              <div className="flex h-10 items-center">
                <div className="flex w-16 items-center justify-center">
                  <div className="z-10 flex h-14 w-9 items-center justify-center rounded-b-2xl bg-gray-100">
                    <LayoutDashboard
                      className={cn(
                        "text-gray-400",
                        isActive && "text-primary",
                      )}
                      size={20}
                    />
                  </div>
                </div>
                <span
                  className={cn(
                    "text-sm font-medium text-gray-950",
                    isActive && "text-primary",
                  )}
                >
                  Dashboard
                </span>
              </div>
            </Link>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
