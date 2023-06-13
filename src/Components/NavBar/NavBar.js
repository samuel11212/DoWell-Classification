import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
          <NavLink to="/ClassificationType"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
                NextPage
              </NavLink>
      </nav>
    </>
  );
}

export default NavBar;