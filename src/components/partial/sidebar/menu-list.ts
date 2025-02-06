import {
  Bookmark,
  LayoutGrid,
  LucideIcon,
  Settings,
  SquarePen,
  Tag,
  Users,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  key: string;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
  key: string;
};

type Group = {
  groupLabel?: string;
  menus: Menu[];
};

export const getMenuList = (pathname: string): Group[] => {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
          key: "Dashboard",
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Posts",
          icon: SquarePen,
          key: "posts",
          submenus: [
            {
              href: "/posts",
              label: "All Posts",
              icon: SquarePen,
              key: "allPost",
            },
            {
              href: "/news",
              label: "New Post",
              icon: SquarePen,
              key: "newPost",
            },
          ],
        },
        {
          href: "/accounts",
          label: "Accounts",
          icon: Bookmark,
          key: "accounts",
        },
        {
          href: "/tags",
          label: "Tags",
          icon: Tag,
          key: "tags",
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/users",
          label: "Users",
          icon: Users,
          key: "users",
        },
        {
          href: "/account",
          label: "Account",
          icon: Settings,
          key: "account",
        },
      ],
    },
  ];
};
