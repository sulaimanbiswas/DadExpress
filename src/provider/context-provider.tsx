"use client";

import NProgressBarProvider from "@/theme/nprogress-bar-provider";
import ThemeContextProvider from "@/theme/theme-context";

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
