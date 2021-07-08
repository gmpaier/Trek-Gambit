import React, { useState} from "react";
import API from "../../utils/API";
import "./style.css";
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
        })
        .catch(err=> console.log(err))
    }

        return (
            <form onSubmit={handleSubmit}>

                <div className="jumbotron">Login</div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={handleEmail}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={handlePassword} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="/login">password?</a>
                </p> */}
            </form>
        ); 
}

export default Login;