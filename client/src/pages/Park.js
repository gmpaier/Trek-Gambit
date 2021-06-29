import React, { Component } from "react";
import { Container, Row, Col} from "../components/Grid";
import ParkInfo from "../components/ParkInfo/ParkInfo";
import Visit from "../components/Visit/Visit";

let params = new URLSearchParams(document.location.search.substring(1));
let parkCode = params.get("parkCode");
console.log(parkCode);

class Park extends Component {

render() {
        return (
            <Container fluid>
                <Row className = "row">
                    <Col size = "8">
                        <ParkInfo parkCode = {parkCode}/>
                    </Col>
                    <Col size = "4">
                        <Visit parkCode = {parkCode} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Park;