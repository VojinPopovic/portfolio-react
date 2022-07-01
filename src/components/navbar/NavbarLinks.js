import React from "react";
import { HashLink as Link } from "react-router-hash-link";




function NavbarLinks(props) {
  const classes = "links " + props.className;

  return (
    <div className={classes}>
      <div>
        <nav className="navbar-one">
          <ul>
            <li>
              <Link smooth to="/">Home</Link>
            </li>
            <li>
              <Link smooth to="/#about-me">About me</Link>
            </li>
            <li>
              <Link smooth to="/#portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavbarLinks;
