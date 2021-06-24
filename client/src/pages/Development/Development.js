import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./Development.css";
import developmentImage from "../../img/dev.jpg";


class Development extends Component {
render() {
        return (
            <Container fluid>
                <img src = {developmentImage} alt="development" />
            </Container>
        )
    }
}

export default Development;