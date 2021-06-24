import React, { Component } from "react";
import { Container} from "../components/Grid";
import Banner from "../components/Banner/Banner";

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