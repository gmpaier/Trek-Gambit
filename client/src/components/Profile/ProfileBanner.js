import React from "react";
import Cookies from "js-cookie";


function ProfileBanner() {

    return (
        <div className="jumbotron">
            <br />
            Welcome, {Cookies.get("name")}
        </div>
    )
}

export default ProfileBanner;
