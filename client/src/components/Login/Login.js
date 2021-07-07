import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(
            this.state.email, this.state.password
        )
        API.login({
            email: this.state.email,
            password: this.state.password
        })
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <div className="jumbotron">Login</div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleEmail}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.handlePassword} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}

export default Login;