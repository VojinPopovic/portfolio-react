import Card from "./Card";
import RedBlobTwo from "./RedBlobTwo.svg";
import useOnScrollLeft from "../../useOnScrollLeft";
import useOnScrollRight from "../../useOnScrollRight";
import { useCallback } from "react";
import { motion } from "framer-motion";

function BottomCard() {
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
    <Card className="bottom-card">
      <div className="top-card-text-container">
        <h2>
          Always interested in learning <span>new</span> things
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo
          delectus ullam debitis rerum nam pariatur, quo odio dolore aperiam?
          Repudiandae officiis facere autem, minima nostrum vel deleniti esse,
          illo quam quod perspiciatis in suscipit laudantium culpa! Officiis
          molestiae, eaque maiores ad similique voluptatem esse voluptates aut?
          Quaerat velit natus fuga nam, aliquam, odit officia explicabo,
          voluptas quasi voluptatem consequatur.
        </p>
      </div>
      <motion.img ref={setRefs}
        animate={animations}
        initial={{ scale: "0" }}
        transition={{ delay: 1, duration: 1 }}
        src={RedBlobTwo}
        alt="RedBlob"
        className="RedBlobTwo"
      />
    </Card>
  );
}

export default BottomCard;
