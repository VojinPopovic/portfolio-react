import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function useOnScroll() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {delay: 2.5, duration: 2 }
      });
    }
    if (!inView) {
      animation.start({ x: "-100vw" });
    }
  }, [inView,animation]);
  return {ref, animation};
}

export default useOnScroll;
