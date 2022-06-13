import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function useOnScrollRight() {
  const [inViewRef2, inView2] = useInView({ treshold: 0.1 });
  const animations = useAnimation();
  useEffect(() => {
    if (inView2) {
      animations.start({
        scale: 1,
      })
    }
    if (!inView2) {
      animations.start({
        scale: 0,
        transition: {delay: 0, duration: 0 }
      });
    }
  }, [inView2, animations]);
  return [inViewRef2, animations];
}

export default useOnScrollRight;
