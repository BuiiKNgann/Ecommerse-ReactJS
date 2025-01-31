import { useEffect } from "react";
import { useState } from "react";
import useScrollHandling from "@/hooks/useScrollHandling";

const useTranslateXImage = () => {
  const { scrollPosition, scrollDriction } = useScrollHandling();
  const [translateXPosition, setTranslateXPosition] = useState(80); // vị trí fix cứng

  const handleTranslateX = () => {
    if (scrollDriction === "down" && scrollPosition >= 1500) {
      // croll đến 1500 thì sẽ gọi setTranslateXPosition - 1px
      setTranslateXPosition(
        // logic kéo xuống: set cứng giá trị là 0   , vì nếu scroll mãi thì 80 -1 sẽ thành âm
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDriction === "up") {
      setTranslateXPosition(
        // logic kéo lên: set cứng giá trị là 80 để khi kéo lên có vị trị cố định để đứng lại
        translateXPosition >= 80 ? 80 : translateXPosition + 1
      );
    }
  };

  // lắng nghe scrollPosition vì khi ta scroll thì scrollPosition sẽ nhận được vị trí mới của con lăn
  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);

  return {
    translateXPosition,
  };
};

export default useTranslateXImage;
