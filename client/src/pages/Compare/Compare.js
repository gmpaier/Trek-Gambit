import React, { Component } from "react";
import { Container, Row, Col} from "../../components/Grid";
import "./Compare.css";
import ParkInfo from "../../components/ParkInfo/ParkInfo"



class Compare extends Component {
    render() {
            return (
                <Container fluid>
                <Row className = "row">
                    <Col size = "5">
                        <ParkInfo parkCode = {"albi"}/>
                    </Col>
                    <Col size = "2">
                        <div className = "text-center">
                            <h1>VERSUS</h1>
                        </div>
                    </Col>
                    <Col size = "5">
                        <ParkInfo parkCode = {"albi"}/>
                    </Col>
                </Row>
            </Container>
            )
        }
    }
    
    export default Compare;