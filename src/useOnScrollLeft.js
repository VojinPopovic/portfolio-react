import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function useOnScrollLeft() {
  const [inViewRef, inView] = useInView()
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { delay: 2, duration: 1 },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView, animation]);
  return [inViewRef, animation];
}

export default useOnScrollLeft;
