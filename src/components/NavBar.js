import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar nav-bar-secondary nav-bar-fixed">
      <div className="app-title">Advice app</div>
      <div>
        <ul className="nav-items">
          <li>
            <NavLink to="/home" tag={Link} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/like" tag={Link} activeClassName="active">
              Like's
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    // </Fade>
  );
};

export default NavBar;
