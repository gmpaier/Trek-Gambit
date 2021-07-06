import React, { Component } from "react";
import API from "../utils/API";
import { Container} from "../components/Grid";
import Banner from "../components/Banner/Banner";
import Feed from "../components/Feed/Feed";

class Home extends Component {
    componentDidMount() {
    API.getVisits()
    .then(res => {
        if (res.data.data === "error") {
            throw new Error(res.data.data);
        }
        else {
            console.log(res.data);
            }
        })
        .catch(err => console.log(err))
    }

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