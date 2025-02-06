"use client";

import { TooltipProvider } from "@/components/ui/tooltip";

const UiProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TooltipProvider>{children}</TooltipProvider>
    </>
  );
};

export default UiProvider;
