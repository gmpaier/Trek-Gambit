import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Form from "../components/Form";
import SearchList from "../components/SearchList"
import Banner from "../components/Banner/Banner"

class Home extends Component {
render() {
    return (
        <Container fluid>
            <Banner />
            
        </Container>
    )
}
}

export default Home;