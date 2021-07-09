import React, { useEffect, useState } from "react";
import API from "../../utils/API";
// import { useTable, useSortBy } from "react-table";
import { Container, Row, Col } from "../Grid";

export const LeadTable = (props) => {
 
    const [parks, setParks] = useState([]);

    useEffect(() => {
        API.getCountByPark()
        .then(res => setParks(res.data))
        .catch(err => console.log(err))
    }, [])

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
                        <Col size="4"><h2>Parks</h2></Col>
                        <Col size="4"><h2>Visits</h2></Col>
                    </Row>
                    {parks.map((park, index) => {
                    index += 1
                    return(
                        <Row>
                            <Col size="4"><h2>{index}. {park.park}</h2></Col>
                            <Col size="4"><h2>{park.visitCount}</h2></Col>
                        </Row>
                    )
                    })}
                </div>
            </div>
            <br />
            <br />
        </Container>
    )
}

export default LeadTable;