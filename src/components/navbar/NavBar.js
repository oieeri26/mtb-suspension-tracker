import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-wrapper black">
      <div className="Container">
        <Link to="/" className="brand-logo">
          MTB Suspension Maintenance Tracker
        </Link>
        <ul className="right">
          <li>
            <NavLink to="/">Bikes</NavLink>
          </li>
          <li>
            <NavLink to="/addbike">Add Bike</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
