import "./Portfolio.css";
import RedBlobSix from "./RedBlobSix.svg";
import RedBlobSeven from "./RedBlobSeven.svg"
import {motion} from "framer-motion"

function Portfolio() {
  return (
    <section>
      <div className="portfolio-section-container">
        <motion.div animate={{ scale: 1 }} initial={{scale:0}} transition={{delay:5, duration:1}} className="portfolio-courasel-container">
          <h2>Portfolio</h2>
        </motion.div>
        <motion.img animate={{ scale: 1 }} initial={{scale:0}} transition={{delay:6, duration:1}} src={RedBlobSix} alt="RedBlobSix" className="redblobsix" />
        <motion.img animate={{ scale: 1 }} initial={{scale:0}} transition={{delay:7, duration:1}} src={RedBlobSeven} alt="RedBlobSeven" className="redblobseven" />
      </div>
    </section>
  );
}

export default Portfolio;
