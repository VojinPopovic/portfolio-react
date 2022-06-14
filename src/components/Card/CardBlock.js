import BlackBlob from "./BlackBlob.svg";
import "./CardBlock.css";
import { motion } from "framer-motion";
import useOnScrollLeft from "../../useOnScrollLeft";
import useOnScrollRight from "../../useOnScrollRight";
import { useCallback } from "react";
import TopCard from "./TopCard";
import BottomCard from "./BottomCard";

function CardBlock() {
  const [inViewRef, animation] = useOnScrollLeft();
  const [inViewRef2, animations] = useOnScrollRight();

  // Use `useCallback` so we don't recreate the function on each render - Could result in infinite loop
  const setRefs = useCallback(
    (node) => {
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
      inViewRef2(node);
    },
    [inViewRef, inViewRef2]
  );

  return (
    <section className="home">
      <div ref={setRefs} className="vojin-container">
        <motion.h3 animate={animation} initial={{ x: "-100vw" }} id="about-me">
          Hi, i'm <span>Vojin</span>
        </motion.h3>
        <motion.img
          animate={animations}
          initial={{ scale: "0" }}
          transition={{ delay: 0.5, duration: 1 }}
          src={BlackBlob}
          alt="BlackBlob"
        />
      </div>
      <TopCard></TopCard>
      <BottomCard></BottomCard>
    </section>
  );
}

export default CardBlock;
