import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function useOnScroll() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        initial: { x: -700 },
        transition: { delay: 2.5, duration: 2 },
      });
    }
    console.log(inView);
  }, [inView]);
  return {};
}
