import React, { useState } from "react";
import API from "../../utils/API";
import Cookies from "js-cookie"

const Login = props => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(
            email, password,
        )
        API.login({
            email: email,
            password: password
        })
        .then(function (res) {
            Cookies.set("name", res.data.first_name);
            Cookies.set("id", res.data.id);
            Cookies.set("last_name", res.data.last_name);
            window.location.href = "/home"
        })
        .catch(err=> console.log(err))
    }

        return (
            <form onSubmit={handleSubmit}>

                <div className="jumbotron mt-5">Login</div>

                <div className="form-group mb-4">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={handleEmail}/>
                </div>

                <div className="form-group mb-4">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={handlePassword} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>

            </form>
        ); 
}

export default Login;