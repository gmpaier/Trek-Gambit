import React from "react";
import "./Feed.css"
import { Container, Col, Row } from "../Grid";
// import PostComment from "../Comment/Comment";

const Feed = props => {
    return (props.visits.length === 0) ? (
        <div className="card">
        <div className="card-body player">
            <div className="article">
                <h3>Nothing to Display, get some friends!</h3>
            </div>
        </div>
    </div>
    ) : (
        <Container fluid>
            <div className="card">
                <div className="card-body">
                    <Row>
                        <Col size = "4" ></Col>
                        <Col size = "16">
                        {props.visits.map(visit => {
                                    return (
                                        <div size = "12" className = "post-bg rounded-3 p-1 border mb-3">

                                        {/* Post Header */}
                                        <Row >
                                            <Col size = "4">
                                            <h1 className = "text-white p-2 postTitle">User's Name</h1>
                                            </Col>
                                            <Col size = "8">
                                            <h1 className = "text-end text-white p-2 postTime">Posted: {new Date().toLocaleTimeString()}</h1>   
                                            </Col>
                                        </Row>
        
                                        {/* Post Photo */}
                                        <Row>
                                            <Col size = "10">
                                                <img src="https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="placeholder image" />
                                            </Col>
                                        </Row>
        
                                        <Row>
                                            <Col size = "10">
                                                <br />
                                                <h2 className = "text-left" >Park Name: Review </h2><br />
                                                <h3 className = "text-left" >Park Name: Review </h3>
                                            </Col>
                                        </Row>
        
        
                                        {/* Post Body */}
                                        <Row >
                                            <Col size = "1"></Col>
                                            <Col size = "10">
                                                <p className = "text-white mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ultricies nisl, in volutpat lacus. Donec congue, lectus id porta congue, dui risus fringilla magna, et auctor risus velit sed libero. Donec ut risus ac ligula congue dictum nec in enim. Donec auctor vestibulum ultricies. Sed cursus tempor lobortis. Vivamus vulputate feugiat orci, pretium dapibus lectus. Integer at rutrum purus, in condimentum mauris. Nullam pellentesque mollis ex, ac sollicitudin velit aliquam id.
                                                <br /><br />Aliquam metus nisl, convallis sed dolor eu, ullamcorper dapibus lorem. Phasellus elementum tortor eget imperdiet faucibus. Nam auctor pretium nunc. Nulla dignissim libero vitae nunc venenatis, ut cursus mi ultrices. Cras pretium lobortis posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tristique pharetra leo. Donec sed hendrerit felis. Nam gravida imperdiet quam sagittis imperdiet. In porta maximus quam eget lacinia. Etiam hendrerit porta aliquet. Duis quis facilisis mi, sed efficitur ante. Proin velit mi, convallis eget nisi in, ullamcorper accumsan tortor.</p>
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

                        <Col size = "2" ></Col>
                    </Row>
                </div>
            </div>
            <br />
            <br />
        </Container>
    )
}

export default Feed;
