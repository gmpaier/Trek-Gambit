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
                A platform for explorers to exchange their experiences.
            </h2>
            <br />
            <div className="row-col-auto">
                <a href="Login" className="signup" type="button">Login | Signup</a>
            </div>
        </div>
    )
}

export default Splash;