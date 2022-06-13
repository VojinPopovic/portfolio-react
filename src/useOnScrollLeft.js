import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function useOnScrollLeft() {
  const [inViewRef, inView] = useInView({ treshold: 0.1 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: { delay: 0.5, duration: 1 },
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView, animation]);
  return [inViewRef, animation];
}

export default useOnScrollLeft;
