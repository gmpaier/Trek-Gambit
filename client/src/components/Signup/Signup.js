import React, { Component } from "react";
import API from "../../utils/API";
 
class SignUp extends Component {

    constructor (props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            password: "",
            email: ""
        };
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstName(event) {
        this.setState({first_name: event.target.value});
    }

    handleLastName(event) {
        this.setState({last_name: event.target.value});
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
            this.state.first_name, this.state.last_name, this.state.email, this.state.password
        )
        API.signup({
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            password: this.state.password,
            email: this.state.email
        })
        .then(res=>console.log(res))
        .catch(err=> console.log(err))
    }



    render() {
        return (
            <form name = "signup" onSubmit={this.handleSubmit}>
                <div className="jumbotron mt-5">Signup</div>

                <div className="form-group mb-4">
                    <label>First name</label>
                    <input type="text" className="form-control" name = "first_name" placeholder="First name" onChange={this.handleFirstName} />
                </div>

                <div className="form-group mb-4">
                    <label>Last name</label>
                    <input type="text" className="form-control" name = "last_name" placeholder="Last name" onChange={this.handleLastName} />
                </div>

                <div className="form-group mb-4">
                    <label>Email</label>
                    <input type="email" className="form-control" name = "email" placeholder="Enter email" onChange={this.handleEmail}/>
                </div>

                <div className="form-group mb-4">
                    <label>Password</label>
                    <input type="password" className="form-control" name = "password" placeholder="Enter password" onChange={this.handlePassword} />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" >Register</button>

            </form>
        );
    }
}

export default SignUp;