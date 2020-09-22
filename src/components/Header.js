import React from "react";
// import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    // <Fade right duration={1000} distance="20px">
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

export default Header;
