import React, { Component } from "react";
import { Container, Row, Col } from "../../components/Grid";
import "./style.css";

class LeadTable extends Component {
    render() {
        return (
            <Container fluid>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="jumbotron">
                    Leaderboard
                </div>
                <div className="card">
                    <div className="card-body">
                        <Row>
                            <Col size="1"><h2>Users</h2></Col>
                            <Col size="1"><h2>Miles</h2></Col>
                            <Col size="1"><h2>Visits</h2></Col>
                        </Row>
                        <Row>
                            <Col size="1"><h2>1.</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                        </Row>
                        <Row>
                            <Col size="1"><h2>2.</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                        </Row>
                        <Row>
                            <Col size="1"><h2>3.</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                        </Row>
                        <Row>
                            <Col size="1"><h2>4.</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                        </Row>
                        <Row>
                            <Col size="1"><h2>5.</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                        </Row>
                        <Row>
                            <Col size="1"><h2>6.</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                        </Row>
                        <Row>
                            <Col size="1"><h2>7.</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                        </Row>
                        <Row>
                            <Col size="1"><h2>8.</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                        </Row>
                        <Row>
                            <Col size="1"><h2>9.</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                        </Row>
                        <Row>
                            <Col size="1"><h2>10.</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                            <Col size="1"><h2>*</h2></Col>
                        </Row>
                    </div>
                </div>
                <br />
                <br />
            </Container>
        )
    }
}

export default LeadTable;