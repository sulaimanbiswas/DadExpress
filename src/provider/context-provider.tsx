"use client";

import ThemeContextProvider from "@/context/theme-context";
import NProgressBarProvider from "@/theme/nprogress-bar-provider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeContextProvider>
        <NProgressBarProvider>{children}</NProgressBarProvider>
      </ThemeContextProvider>
    </>
  );
};

export default Provider;
