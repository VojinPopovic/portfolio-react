import "./NavBar.css";
import { motion } from "framer-motion";
import useOnScrollNav from "./useOnScrollNav";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarLinks from "./NavbarLinks";
import ContactButton from "./ContactButton";
import "./NavbarMobile.css";

function NavbarMobile() {
  const [ref, animation] = useOnScrollNav();

  return (
    <div ref={ref}>
      <motion.div
        animate={animation}
        initial={{ y: "-100vh" }}
        transition={{ duration: 1 }}
        className="navbar-container-mobile"
      >
        <div className="hamburger-icon-container">
            <AiOutlineMenu color="white" size="50%"/>
        </div>
        <div className="mobile-menu">
          <NavbarLinks />
        </div>
        <ContactButton />
      </motion.div>
    </div>
  );
}

export default NavbarMobile;
