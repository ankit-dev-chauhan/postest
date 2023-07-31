import { useState, useEffect, useCallback } from "react";

export const useMobile = (props) => {
  const [width, setWidth] = useState(0);
  // checks if its a mobile browser, return bool
  const detectMob = () => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];
    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  };
  // const hasWindow = typeof window !== "undefined";

  const handleWindowSizeChange = useCallback(() => {
    if (detectMob()) {
      setWidth(screen.width);
    } else {
      setWidth(screen.width);
    }
  }, []);

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width > 0 && width <= 767;
};
