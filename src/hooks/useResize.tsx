import { useState, useEffect } from "react";

type WindowSize = {
  width: number;
  height: number;
};

export const useResize = () => {
  const [windowsSize, setWindowSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const getResizeWindowSize = () => {
      window.addEventListener("resize", () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      });
    };

    getResizeWindowSize();

    return () => {
      window.removeEventListener("resize", getResizeWindowSize);
    };
  }, []);

  return [windowsSize];
};
