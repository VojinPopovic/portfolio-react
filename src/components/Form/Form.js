import "./Form.css";
import RedBlobFour from "./RedBlobFour.svg";
import BlackBlobTwo from "./BlackBlobTwo.svg";
import { motion } from "framer-motion";
import useOnScrollLeft from "../../useOnScrollLeft";
import useOnScrollRight from "../../useOnScrollRight";
import { useCallback } from "react";

function Form() {
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
    <section className="contact-form-main">
      <div className="contact-form-container">
        <div ref={setRefs} className="contact-subtitle-container">
          <motion.h2
            animate={animation}
            initial={{ x: 0 }}
            className="contact-subtitle"
          >
            <span>Say</span> Hello!
          </motion.h2>
          <motion.img
            animate={animations}
            initial={{ scale: 0 }}
            transition={{ delay: 1, duration: 1 }}
            src={BlackBlobTwo}
            alt="BlackBlobTwo"
            className="black-blob-two"
          />
        </div>
        <div className="form-container">
          <form
            action="https://formsubmit.co/vojinpopovic3@gmail.com"
            method="POST"
          >
            <div className="contact-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea type="text" id="message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
          <motion.img
            animate={animations}
            initial={{ scale: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            src={RedBlobFour}
            alt="RedBlobFour"
            className="redblobfour"
          />
        </div>
      </div>
    </section>
  );
}

export default Form;
