import React from "react";
import Cookies from "js-cookie";


function ProfileBanner() {

    return (
        <div className="jumbotron">
            <br />
            {Cookies.get("id") && "Welcome, " + Cookies.get("name")}
            {!Cookies.get("id") && "Sign Up and Log In to view this feature!"}
        </div>
    )
}

export default ProfileBanner;
