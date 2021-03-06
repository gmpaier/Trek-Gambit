import React from "react";
import { Container, Col, Row } from "../Grid";
import Cookies from "js-cookie";
// import PostComment from "../Comment/Comment";

const Feed = props => {
    console.log(props); 
    return !Cookies.get("id") && (props.visits.length === 0) ? (
        <div className="card">
        <div className="card-body player">
            <div className="article">
                <h3>Nothing to Display</h3>
            </div>
        </div>
    </div>
    ) : (
        <Container fluid>
            <div className="card">
                <div className="card-body">
                <Row>
                        <Col size = "1" ></Col>
                        <Col size = "10">
                        {props.visits.map(visit => {
                                    return Cookies.get("id") && (
                                        <div className = "post-bg rounded-3 p-1 border mb-3">

                                        {/* Post Header */}
                                        <Row >
                                            <Col size = "12">
                                            <h1 className = "text-white text-center p-2 postTime">{visit.user.first_name} {visit.user.last_name}</h1>
                                            </Col>
                                            <Col size = "12">
                                            <h1 className = "text-center text-white p-2 postTitle">Posted: {visit.date}</h1>   
                                            </Col>
                                        </Row>
        
                                        {/* Post Photo */}
                                        <Row>
                                            <Col size = "6" className = "mw-50">
                                                <img  src= {visit.image} alt="placeholder" />
                                            </Col>
                                        </Row>
        
                                        <Row>
                                            <Col size = "10">
                                                <br />
                                                <h2>{visit.park} - {visit.status}</h2><br />
                                                <h3>Rating: {visit.rating}/5</h3>
                                            </Col>
                                        </Row>
        
        
                                        {/* Post Body */}
                                        <Row >
                                            <Col size = "1"></Col>
                                            <Col size = "10">
                                                <h3>Activity: {visit.activity} for {visit.length} {visit.unit}</h3>
                                                <h3 className = "text-white mt-2">"{visit.body}"</h3>
                                               
                                            </Col>
                                            <Col size = "1"></Col>
                                        </Row>
                                        <Row>
                                            {/* <PostComment /> */}
                                        </Row>
                                        <br />
                                        <br />

                                    </div>

                                    
                                    )
                                })}
                        </Col>

                        <Col size = "1" ></Col>
                    </Row>
                </div>
            </div>
            <br />
            <br />
        </Container>
    )
}

export default Feed;
