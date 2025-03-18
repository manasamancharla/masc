import { useRef, useState } from "react";

const NAV_BAR_HEIGHT = 58;

const useScrollHandler = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isHidden, setIsHidden] = useState(false);
  const previousScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const deltaScroll = currentScrollY - previousScrollY.current;

    if (deltaScroll > NAV_BAR_HEIGHT && previousScrollY.current === 0) {
      previousScrollY.current = currentScrollY;
      return;
    }

    setIsHidden(deltaScroll > 0);
    previousScrollY.current = currentScrollY;
  };

  return { navRef, isHidden, handleScroll };
};

export default useScrollHandler;
