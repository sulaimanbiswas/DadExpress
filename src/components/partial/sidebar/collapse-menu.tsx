import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { LayoutDashboard, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

interface CollapseMenuProps {
  icon: LucideIcon;
  label: string;
  active: boolean;
  submenus: Submenu[];
  collapse: boolean | undefined;
}

const CollapseMenu = ({
  icon: Icon,
  label,
  active,
  submenus,
}: CollapseMenuProps) => {
  const pathname = usePathname();
  const isSubmenuActive = submenus.some((submenu) =>
    submenu.active === undefined ? submenu.href === pathname : submenu.active,
  );
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);
  return (
    <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed}>
      <CollapsibleTrigger
        asChild
        className={cn(
          "w-full transition-all hover:bg-gray-100",
          isSubmenuActive && "transition-all",
        )}
      >
        <div className="relative flex h-12 items-center justify-between">
          <div className="flex items-center">
            <div className={cn("flex w-16 items-center justify-center")}>
              {isCollapsed && (
                <div className="absolute top-6 h-8 w-9 bg-gray-100"></div>
              )}
              <div
                className={cn(
                  "transition-all duration-300 animate-in animate-out",
                  isCollapsed &&
                    "z-50 flex h-9 w-9 items-center justify-center rounded-full bg-gray-400",
                )}
              >
                <Icon
                  className={cn(
                    "text-gray-400 transition-all duration-300 animate-in animate-out",
                    isCollapsed && "text-primary-foreground",
                    isSubmenuActive && !isCollapsed && "text-primary",
                  )}
                  size={18}
                />
              </div>
            </div>
            <span
              className={cn(
                "text-sm font-medium text-gray-950",
                isSubmenuActive && !isCollapsed && "text-primary",
              )}
            >
              {label}
            </span>
          </div>
          <div className="flex items-center pr-5">
            <IoIosArrowUp className="text-gray-600" />
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-full transition-all duration-1000 animate-in animate-out">
        <div className="mb-4">
          {submenus.map(({ href, label }, index) => (
            <div
              key={index}
              className={cn(
                "transition-all hover:bg-gray-100",
                (pathname === href || active) && "bg-gray-100 transition-all",
              )}
            >
              <Link href={href}>
                <div className="flex h-10 items-center">
                  <div className="flex w-16 items-center justify-center">
                    <div
                      className={cn(
                        "z-10 flex h-10 w-9 items-center justify-center bg-gray-100",
                        submenus?.length &&
                          "z-10 flex h-14 w-9 items-center justify-center rounded-b-2xl bg-gray-100",
                      )}
                    >
                      <LayoutDashboard
                        className={cn(
                          "text-gray-400",
                          (pathname === href || active) && "text-primary",
                        )}
                        size={18}
                      />
                    </div>
                  </div>
                  <span
                    className={cn(
                      "text-sm font-medium text-gray-950",
                      (pathname === href || active) && "text-primary",
                    )}
                  >
                    {label}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapseMenu;
