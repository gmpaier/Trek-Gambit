import React, { Component } from "react";
import API from "../utils/API";
import { Container} from "../components/Grid";
import Banner from "../components/Banner/Banner";
import Feed from "../components/Feed/Feed";

class Home extends Component {

    state = {
        savedVisits: []
    };

    componentDidMount() {
    API.getVisits()
    .then(res => {
        if (res.data.data === "error") {
            throw new Error(res.data.data);
        }
        else {
            this.setState({ savedVisits: res.data})
            console.log(this.state.savedVisits)
            }
        })
        .catch(err => console.log(err))
    }



render() {
        return (
            <Container fluid>
                <Banner />
                <Feed visits = {this.state.savedVisits}/>
            </Container>
        )
    }
}

export default Home;