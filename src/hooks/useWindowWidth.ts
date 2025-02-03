import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleWindowSizeChange = () => {
    const currentWindow = window.innerWidth;
    setWidth(currentWindow);
    setIsMobile(currentWindow <= 768);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      handleWindowSizeChange();
      window.addEventListener("resize", handleWindowSizeChange);
      return () => window.removeEventListener("resize", handleWindowSizeChange);
    }
  }, []);

  return { width, isMobile };
};

export default useWindowWidth;
