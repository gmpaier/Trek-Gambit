import React, { Component } from "react";
import { Container, Row, Col} from "../../components/Grid";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

class Register extends Component {

render() {
        return (
            <Container fluid>
                <Row className = "row">
                    <Col size = "6">
                        <Login/>
                    </Col>
                    <Col size = "6">
                        <Signup/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Register;