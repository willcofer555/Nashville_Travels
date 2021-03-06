import React from "react";
import { NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./homes.css";

export function Nav({ props }) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">
          <img className="navbar-brand" src="" alt="" width="80" height="80" />
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="nucampNavbar"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse " id="nucampNavbar">
            <ul className="navbar-nav ml-auto">
              {/*<NavItem>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
    </NavItem> */}
              <NavItem>
                <a className="nav-link text-white" href="/">
                  Home
                </a>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-white" to="/locations">
                  Locations
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-white" to="/contact">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link text-white" to="/login">
                  Login
                </NavLink>
              </NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
