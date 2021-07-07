import React, { useEffect, useState } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import API from "../../utils/API";





function Nav() {

    const [parkCode, setParkCode] = useState()

    useEffect(()=> {
      API.getParkCodes()
      .then(res => {
        if (res.data === "error") {
          throw new Error(res.data.data);
        } else {
          let i = Math.floor(Math.random() * 467) ;
          let result = res.data.data[i].parkCode;
          console.log("Executing")
          setParkCode(result)
        }
      })}, [])
    

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
              to = {{
                pathname: "/park/?parkCode=" + parkCode,
              }}
              className = "nav-link"

              >
                Random
              </NavLink>
              <NavLink 
              to = "/compare"
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
              <NavLink 
              to = "/Login"
              className = "nav-link"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
}
  
export default Nav;