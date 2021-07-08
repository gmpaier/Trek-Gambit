import React from "react";
// import { useTable, useSortBy } from "react-table";
import { Container, Row, Col } from "../Grid";
import "./style.css";

export const LeadTable = (props) => {
    // const data = props.data;
    // const tableInstance = useTable({
    //     data
    // })

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
                    <Row>
                        <Col size="4"><h2>1.{props.name}</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>2.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>3.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>4.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>5.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>6.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>7.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>8.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>9.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>10.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>11.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>12.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>13.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>14.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>15.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>16.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>17.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>18.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>19.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                    <Row>
                        <Col size="4"><h2>20.</h2></Col>
                        <Col size="4"><h2>*</h2></Col>
                    </Row>
                </div>
            </div>
            <br />
            <br />
        </Container>
    )
}

export default LeadTable;