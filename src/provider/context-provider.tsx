"use client";

import NProgressBarProvider from "@/theme/nprogress-bar-provider";
import ThemeContextProvider from "@/theme/theme-context";
import UiProvider from "./ui-provider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UiProvider>
        <ThemeContextProvider>
          <NProgressBarProvider>{children}</NProgressBarProvider>
        </ThemeContextProvider>
      </UiProvider>
    </>
  );
};

export default Provider;
