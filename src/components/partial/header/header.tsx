"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeContext } from "@/theme/theme-context";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";
import { AlignJustify, Bell, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const Header = () => {
  const { collapse, setCollapsed } = useContext(ThemeContext);
  return (
    <div
      className="grid h-[50px] w-full grid-cols-[173px_0%_1fr] items-center pr-6 lg:grid-cols-[240px_50%_1fr]"
      style={{
        background:
          "linear-gradient(218.47deg, rgb(59, 58, 90) -74.13%, rgb(129, 78, 240) 106.5%)",
      }}
    >
      <div className="flex items-center">
        <div className="flex w-16 flex-shrink-0 items-center justify-center">
          <button
            className="flex h-6 w-6 items-center justify-center"
            onClick={() => setCollapsed(!collapse)}
          >
            <AlignJustify size={22} className="text-white" />
          </button>
        </div>
        <Link href="/accounts" className="mt-1.5 flex h-6 items-center">
          <Image
            className="dark:invert"
            src="/logo.svg"
            alt="Next.js logo"
            width={113}
            height={19}
            priority
          />
        </Link>
      </div>
      <div className=""></div>
      <div className="flex w-full items-center justify-end gap-3">
        <Link
          href="/notificaton"
          className="flex h-8 w-10 items-center justify-center rounded-md bg-white/10"
        >
          <Bell className="text-white" size={20} fill="#fff" />
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex h-[26px] w-[26px] cursor-pointer items-center justify-center rounded-full bg-white p-1">
              <User strokeWidth={2.5} className="text-primary" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px] pt-4">
            <DropdownMenuLabel>
              <div className="flex w-full flex-col items-center justify-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 p-1">
                  <User strokeWidth={2.5} className="text-primary-foreground" />
                </div>
                <p className="text-xs font-normal">
                  dadexpresslimited@gmail.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-xs">Settings</DropdownMenuItem>
            <DropdownMenuItem className="text-xs">
              Trams of use
            </DropdownMenuItem>
            <DropdownMenuItem className="text-xs">
              Change Password
            </DropdownMenuItem>
            <DropdownMenuItem className="mt-2 flex w-full items-center justify-center bg-gray-100 text-xs font-medium">
              Log out
            </DropdownMenuItem>
            <DropdownMenuArrow className="fill-white" />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
