import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function useOnScrollNav() {
  const [ref, inView] = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0
      });
    }
    if (!inView) {
      animation.start({ y: "-99vh" });
    }
  }, [inView, animation]);
  return [ref, animation];
}

export default useOnScrollNav;
