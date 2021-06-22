import { useEffect, useState } from "react";
const MOBILE_WIDTH = 768;
export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= MOBILE_WIDTH && !isMobile) {
        setIsMobile(true);
      } else if (width >= MOBILE_WIDTH && isMobile) {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  return { isMobile };
};
