import React from "react";

function NavbarLinks(props) {
  const classes = "links " + props.className;

  return (
    <div className={classes}>
      <div>
        <nav className="navbar-one">
          <ul>
            <li>
              <a href="http://localhost:3000/">Home</a>
            </li>
            <li>
              <a href="http://localhost:3000/#about-me">About Me</a>
            </li>
            <li>
              <a href="http://localhost:3000/">Portfolio</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavbarLinks;
