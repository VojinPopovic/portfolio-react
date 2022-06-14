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
        <div className="portfolio-courasel-container">
          <h2>Portfolio</h2>
        </div>
        {/* prettier-ignore */}
        <motion.img animate={animations} initial={{scale:0}} transition={{delay:0.5, duration:1}} src={RedBlobSix} alt="RedBlobSix" className="redblobsix" />
        {/* prettier-ignore */}
        <motion.img animate={animations} initial={{scale:0}} transition={{delay:1, duration:1}} src={RedBlobSeven} alt="RedBlobSeven" className="redblobseven" />
      </div>
    </section>
  );
}

export default Portfolio;
