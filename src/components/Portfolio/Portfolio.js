import "./Portfolio.css";
import RedBlobSix from "./RedBlobSix.svg";
import RedBlobSeven from "./RedBlobSeven.svg";
import { motion } from "framer-motion";
import useOnScrollRight from "../../useOnScrollRight";

function Portfolio() {
  const [inViewRef2, animations] = useOnScrollRight();

  return (
    <section>
      <div ref={inViewRef2} className="portfolio-section-container">
        {/* prettier-ignore */}
        <motion.div  animate={animations} initial={{scale:0}} transition={{type: "spring", bounce: 0.6, delay:1, duration:1}} className="portfolio-courasel-container">
          <h2>Portfolio</h2>
        </motion.div>
        {/* prettier-ignore */}
        <motion.img animate={animations} initial={{scale:0}} transition={{delay:1.5, duration:1}} src={RedBlobSix} alt="RedBlobSix" className="redblobsix" />
        {/* prettier-ignore */}
        <motion.img animate={animations} initial={{scale:0}} transition={{delay:2, duration:1}} src={RedBlobSeven} alt="RedBlobSeven" className="redblobseven" />
      </div>
    </section>
  );
}

export default Portfolio;
