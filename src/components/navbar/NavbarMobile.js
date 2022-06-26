import "./NavBar.css";
import { useState } from "react";
import { motion } from "framer-motion";
import useOnScrollNav from "./useOnScrollNav";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import NavbarLinks from "./NavbarLinks";
import ContactButton from "./ContactButton";
import "./NavbarMobile.css";

function NavbarMobile() {
  const [ref, animation] = useOnScrollNav();
  const [open, setOpen] = useState(false);

  const hamburger = (
    <div className="hamburger-icon-container">
      <AiOutlineMenu color="white" size="50%" onClick={() => setOpen(!open)} />
    </div>
  );

  const close = (
    <div className="close-icon-container">
      <MdClose color="white" size="50%" onClick={() => setOpen(!open)} />
    </div>
  );

  return (
    <div ref={ref}>
      <motion.div
        animate={animation}
        initial={{ y: "-100vh" }}
        transition={{ duration: 1 }}
        className="navbar-container-mobile"
      >
        {open ? hamburger : close}
        {open || <NavbarLinks />}
        <ContactButton />
      </motion.div>
    </div>
  );
}

export default NavbarMobile;
