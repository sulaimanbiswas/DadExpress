"use client";

import NProgressBarProvider from "@/theme/nprogress-bar-provider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <ThemeProvider> */}
      <NProgressBarProvider>{children}</NProgressBarProvider>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Provider;
