import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import API from "../../utils/API";
import Cookies from "js-cookie"

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

      function deleteAll() {
        Cookies.remove("id");
        Cookies.remove("name");
        Cookies.remove("last_name");
      }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ opacity: 93 }}>
        <div className="container navAlign">
          <div className="row-cols-auto navAlign">
            <div className="navbar" id="navbarNav">
              <NavLink 
              to = "/home"
              className = "nav-link"
              >
                Home
              </NavLink>

              {Cookies.get("id") &&<NavLink 
              to = "/search"
              className = "nav-link"
              >
                Search
              </NavLink>}
              
              <NavLink 
              to = "/profile"
              className = "nav-link"
              >
                Profile
              </NavLink>

              {Cookies.get("id") &&<NavLink 
              to = {{
                pathname: "/park/?parkCode=" + parkCode,
              }}
              className = "nav-link"
              >
                Random
              </NavLink>}
{/* 
              {Cookies.get("id") &&<NavLink 
              to = "/compare"
              className = "nav-link"
              >
                Park Or Not
              </NavLink>}
               */}
              <NavLink 
              to = "/leaderboard"
              className = "nav-link"
              >
                Leaderboard
              </NavLink>
              
              {!Cookies.get("id") && <NavLink 
              to = "/Login"
              className = "nav-link"
              >
                Login
              </NavLink>}
              {Cookies.get("id") && <NavLink to = "/home" className = "nav-link" onClick = {() => deleteAll()}>Logout</NavLink>} 
            </div>
          </div>
        </div>
      </nav>
    );
}
  
export default Nav;