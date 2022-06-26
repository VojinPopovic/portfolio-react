import "./NavBar.css";
import { motion } from "framer-motion";
import useOnScrollNav from "./useOnScrollNav";
import NavbarLinks from "./NavbarLinks";
import ContactButton from "./ContactButton";

function NavBar() {
  const [ref, animation] = useOnScrollNav();

  return (
    <div ref={ref}>
      <motion.div
        animate={animation}
        initial={{ y: "-100vh" }}
        transition={{ duration: 1 }}
        className="navbar-container-one"
      >
        <NavbarLinks />
        <ContactButton/>
        
      </motion.div>
    </div>
  );
}

export default NavBar;
