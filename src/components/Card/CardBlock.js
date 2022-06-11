import Card from "./Card";
import CardImage from "./CardImage.png";
import RedBlobTwo from "./RedBlobTwo.svg";
import BlackBlob from "./BlackBlob.svg";
import "./CardBlock.css";
import { motion } from "framer-motion";
import useOnScrollLeft from "../../useOnScrollLeft";
import useOnScrollRight from "../../useOnScrollRight";
import { useCallback } from "react";

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
        <motion.h3 animate={animation} initial={{ x: "-100vw" }}>
          Hi, i'm <span>Vojin</span>
        </motion.h3>
        <motion.img
          animate={animations}
          initial={{ scale: "0" }}
          transition={{ delay: 1, duration: 1 }}
          src={BlackBlob}
          alt="BlackBlob"
        />
      </div>
      <Card className="top-card">
        <div className="top-card-text-container">
          <motion.h2>
            A <span>frontend</span> <br /> developer
          </motion.h2>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo
            delectus ullam debitis rerum nam pariatur, quo odio dolore aperiam?
            Repudiandae officiis facere autem, minima nostrum vel deleniti esse,
            illo quam quod perspiciatis in suscipit laudantium culpa! Officiis
            molestiae, eaque maiores ad similique voluptatem esse voluptates
            aut? Quaerat velit natus fuga nam, aliquam, odit officia explicabo,
            voluptas quasi voluptatem consequatur.
          </motion.p>
        </div>
        {/* prettier-ignore */}
        <motion.svg animate={animations} initial={{scale:"0"}} transition={{delay:1.5, duration:1}} width="236" height="202" viewBox="0 0 236 202" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M210 107.315C224.692 128.248 240.774 153.384 233.644 169.881C226.608 186.192 196.361 193.864 173.216 196.702C150.258 199.633 134.308 197.917 114.898 199.364C95.4883 200.811 72.6191 205.422 57.5247 196.896C42.4303 188.37 35.018 166.427 22.6805 136.169C10.4367 105.725 -6.91876 66.8714 3.12884 39.4651C13.0827 12.2451 50.3458 -3.34138 82.6178 0.746525C114.61 4.92707 141.516 28.9684 161.621 49.355C181.819 69.5552 195.308 86.3809 210 107.315Z" fill="#DA3636"/>
        </motion.svg>
        <motion.img src={CardImage} alt="CardImage" className="card-image" />
      </Card>
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
            molestiae, eaque maiores ad similique voluptatem esse voluptates
            aut? Quaerat velit natus fuga nam, aliquam, odit officia explicabo,
            voluptas quasi voluptatem consequatur.
          </p>
        </div>
        <motion.img
          animate={animations}
          initial={{ scale: "0" }}
          transition={{ delay: 1, duration: 1 }}
          src={RedBlobTwo}
          alt="RedBlob"
          className="RedBlobTwo"
        />
      </Card>
    </section>
  );
}

export default CardBlock;
