import React from "react";
import "./style.css";

function Splash() {
    return (
        <div className="container-fluid">
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="jumbotron">
                Trek Gambit
            </div>
            <br />
            <h2>
                Welcome to...
            </h2>
            <br />
            <div className="row-col-auto">
                <a href="Login" className="signup" type="button">Login/Sign-Up</a>
            </div>
        </div>
    )
}

export default Splash;