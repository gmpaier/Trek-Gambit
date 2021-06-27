import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ opacity: 93 }}>
        <div className="container">
          <div className="row-cols-auto">
            <div className="navbar" id="navbarNav">
              <NavLink 
              to = "/home"
              className = "nav-link"
              >
                Home
              </NavLink>
              <NavLink 
              to = "/search"
              className = "nav-link"
              >
                Search
              </NavLink>
              <NavLink 
              to = "/development"
              className = "nav-link"
              >
                Random
              </NavLink>
              <NavLink 
              to = "/development"
              className = "nav-link"
              >
                Park Or Not
              </NavLink>
              <NavLink 
              to = "/leaderboard"
              className = "nav-link"
              >
                Leaderboard
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
}
  
export default Nav;