import "./NavBar.css";
import { motion } from "framer-motion";

function NavBar(props) {
  return (
    <motion.div
      animate={{
        y: 0,
      }}
      initial={{ y: -200 }}
      transition={{ duration: 1 }}
      className="navbar"
    >
      <nav>
        <ul>
          <motion.li
            animate={{
              y: 0,
            }}
            initial={{ y: -200 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <a href="http://localhost:3000/">Home</a>
          </motion.li>
          <motion.li
            animate={{
              y: 0,
            }}
            initial={{ y: -200 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <a href="http://localhost:3000/">Portfolio</a>
          </motion.li>
          <motion.li
            animate={{
              y: 0,
            }}
            initial={{ y: -200 }}
            transition={{ delay: 2, duration:0.5 }}
          >
            <a href="http://localhost:3000/">About Me</a>
          </motion.li>
        </ul>
      </nav>
      <motion.button
        animate={{
          y: 0,
        }}
        initial={{ y: -200 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="contact-button"
      >
        {/* prettier-ignore */}
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M14.6467 12.22C14.6467 12.46 14.5934 12.7067 14.48 12.9467C14.3667 13.1867 14.22 13.4133 14.0267 13.6267C13.7 13.9867 13.34 14.2467 12.9334 14.4133C12.5334 14.58 12.1 14.6667 11.6334 14.6667C10.9534 14.6667 10.2267 14.5067 9.46004 14.18C8.69337 13.8533 7.92671 13.4133 7.16671 12.86C6.40004 12.3 5.67337 11.68 4.98004 10.9933C4.29337 10.3 3.67337 9.57334 3.12004 8.81334C2.57337 8.05334 2.13337 7.29334 1.81337 6.54001C1.49337 5.78001 1.33337 5.05334 1.33337 4.36001C1.33337 3.90668 1.41337 3.47334 1.57337 3.07334C1.73337 2.66668 1.98671 2.29334 2.34004 1.96001C2.76671 1.54001 3.23337 1.33334 3.72671 1.33334C3.91337 1.33334 4.10004 1.37334 4.26671 1.45334C4.44004 1.53334 4.59337 1.65334 4.71337 1.82668L6.26004 4.00668C6.38004 4.17334 6.46671 4.32668 6.52671 4.47334C6.58671 4.61334 6.62004 4.75334 6.62004 4.88001C6.62004 5.04001 6.57337 5.20001 6.48004 5.35334C6.39337 5.50668 6.26671 5.66668 6.10671 5.82668L5.60004 6.35334C5.52671 6.42668 5.49337 6.51334 5.49337 6.62001C5.49337 6.67334 5.50004 6.72001 5.51337 6.77334C5.53337 6.82668 5.55337 6.86668 5.56671 6.90668C5.68671 7.12668 5.89337 7.41334 6.18671 7.76001C6.48671 8.10668 6.80671 8.46001 7.15337 8.81334C7.51337 9.16668 7.86004 9.49334 8.21337 9.79334C8.56004 10.0867 8.84671 10.2867 9.07337 10.4067C9.10671 10.42 9.14671 10.44 9.19337 10.46C9.24671 10.48 9.30004 10.4867 9.36004 10.4867C9.47337 10.4867 9.56004 10.4467 9.63337 10.3733L10.14 9.87334C10.3067 9.70668 10.4667 9.58001 10.62 9.50001C10.7734 9.40668 10.9267 9.36001 11.0934 9.36001C11.22 9.36001 11.3534 9.38668 11.5 9.44668C11.6467 9.50668 11.8 9.59334 11.9667 9.70668L14.1734 11.2733C14.3467 11.3933 14.4667 11.5333 14.54 11.7C14.6067 11.8667 14.6467 12.0333 14.6467 12.22Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
          </svg>
        </div>
        <p>Contact</p>
      </motion.button>
    </motion.div>
  );
}

export default NavBar;
