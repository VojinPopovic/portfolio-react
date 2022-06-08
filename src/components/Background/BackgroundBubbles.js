import ElipseOne from "../ElipseOne.svg";
import ElipseTwo from "../ElipseTwo.svg";
import ElipseThree from "../ElipseThree.svg";
import ElipseFour from "../ElipseFour.svg";
import ElipseFive from "../ElipseFive.svg";
import ElipseSix from "../ElipseSix.svg";
import ElipseSeven from "../ElipseSeven.svg";
import ElipseEight from "../ElipseEight.svg";
import { motion } from "framer-motion";

function BackgroundBubbles() {
  return (
    <div className="background-wrap">
      <motion.img
        animate={{
          x: [0, -50, -50, 0],
          y: [0, -100, -100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        src={ElipseOne}
        alt="elipse-one"
        className="elipse-one"
      />
      <motion.img
        animate={{
          x: [0, 50, 50, 0],
          y: [0, -50, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        src={ElipseTwo}
        alt="elipse-two"
        className="elipse-two"
      />
      <motion.img
        animate={{
          x: [0, -50, -50, 0],
          y: [0, 100, 100, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
        }}
        src={ElipseThree}
        alt="elipse-three"
        className="elipse-three"
      />
      <motion.img
        animate={{
          x: [0, 50, 50, 0],
          y: [0, 50, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        src={ElipseFour}
        alt="elipse-four"
        className="elipse-four"
      />
      <motion.img
        animate={{
          x: [0, 50, 50, 0],
          y: [0, 50, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        src={ElipseFive}
        alt="elipse-five"
        className="elipse-five"
      />
      <motion.img
        animate={{
          x: [0, 50, 50, 0],
          y: [0, 50, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        src={ElipseSix}
        alt="elipse-five"
        className="elipse-six"
      />
      <motion.img
        animate={{
          x: [0, 50, 50, 0],
          y: [0, 50, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        src={ElipseSeven}
        alt="elipse-seven"
        className="elipse-seven"
      />
      <motion.img
        animate={{
          x: [0, 50, 50, 0],
          y: [0, 50, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
        }}
        src={ElipseEight}
        alt="elipse-eight"
        className="elipse-eight"
      />
    </div>
  );
}

export default BackgroundBubbles;
