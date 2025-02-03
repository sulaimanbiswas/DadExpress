"use client";

import useWindowWidth from "@/hooks/useWindowWidth";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  collapse: false,
  setCollapsed: (value: boolean) => {},
});

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [collapse, setCollapsed] = useState(false);
  const { isMobile } = useWindowWidth();
  const pathname = usePathname();

  useEffect(() => {
    if (localStorage.getItem("hidesidebar") === "true") {
      setCollapsed(true);
    }
  }, []);

  useEffect(() => {
    if (collapse === true) {
      localStorage.setItem("hidesidebar", "true");
    } else {
      localStorage.setItem("hidesidebar", "false");
    }
  }, [collapse]);

  useEffect(() => {
    if (isMobile) {
      setCollapsed(true);
      if (pathname) setCollapsed(true);
    }
  }, [isMobile, pathname]);

  return (
    <ThemeContext.Provider value={{ collapse, setCollapsed }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
