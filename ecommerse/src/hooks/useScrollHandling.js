import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const useScrollHandling = () => {
  const [scrollDriction, setScrollDrection] = useState(null);
  const previousScrollPosition = useRef(0); //Lưu trữ giá trị không gây re-render
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset; // lấy ra vị trí hiện tại của scroll

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDrection("down");
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDrection("up");
    }

    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition; // tránh trường hợp âm

    setScrollPosition(currentScrollPosition);
  };

  // Lắng nghe sự kiện scrol trên trình duyệt
  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);

    //clean up
    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);

  return {
    scrollDriction,
    scrollPosition,
  };
};

export default useScrollHandling;
