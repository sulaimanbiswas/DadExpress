"use client";

import { getMenuList } from "@/components/partial/sidebar/menu-list";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ThemeContext } from "@/theme/theme-context";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import CollapseMenu from "./collapse-menu";

const Sidebar = () => {
  const { collapse } = useContext(ThemeContext);
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

  return (
    <aside
      className={cn(
        "fixed w-[240px] flex-shrink-0 overflow-hidden border-r border-[#e4e6eb] bg-white pt-1.5 transition-all duration-300 md:relative",
        collapse && "w-0 md:w-16",
      )}
    >
      {!collapse && (
        <div
          className={cn(
            "flex flex-col gap-3 border-b border-[#e4e6eb] p-[18px] pr-5 pt-3.5",
          )}
        >
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
        {menuList?.map(({ groupLabel, menus }, index) => (
          <div key={index}>
            {groupLabel && (
              <div className="px-5 py-2">
                {!collapse ? (
                  <p className="text-sm font-medium text-gray-500">
                    {groupLabel}
                  </p>
                ) : (
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Ellipsis className="text-sm font-medium text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={20}>
                      <p>{groupLabel}</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            )}
            {menus?.map(
              ({ href, label, icon: Icon, active, submenus }, index) => (
                <div key={index}>
                  {!submenus || submenus?.length === 0 ? (
                    <div
                      className={cn(
                        "transition-all hover:bg-gray-100",
                        (active === undefined && pathname === href) || active
                          ? "bg-gray-100 transition-all"
                          : "",
                      )}
                    >
                      <Link href={href}>
                        <div className="flex h-12 items-center">
                          <div className="flex w-16 items-center justify-center">
                            <Icon
                              className={cn(
                                "text-gray-400",
                                ((active === undefined && pathname === href) ||
                                  active) &&
                                  "text-primary",
                              )}
                              size={18}
                            />
                          </div>
                          <span
                            className={cn(
                              "text-sm font-medium text-gray-950",
                              ((active === undefined && pathname === href) ||
                                active) &&
                                "text-primary",
                            )}
                          >
                            {label}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ) : (
                    <CollapseMenu
                      active={active === undefined ? pathname === href : active}
                      icon={Icon}
                      label={label}
                      submenus={submenus}
                      collapse={collapse}
                    />
                  )}
                </div>
              ),
            )}
          </div>
        ))}
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
