import React, { Component } from "react";
import { Container} from "../components/Grid";
import Banner from "../components/Banner/Banner";
import Feed from "../components/Feed/Feed";

class Home extends Component {
render() {
        return (
            <Container fluid>
                <Banner />
                <Feed />
            </Container>
        )
    }
}

export default Home;