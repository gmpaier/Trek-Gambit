import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "../components/Grid";
import Form from "../components/Form";
import SearchList from "../components/SearchList"
import Jumbotron from "../components/Jumbotron";


class Parksearch extends Component {
    state = {
        search: "",
        parks: [],
        error: "",
        message: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getNationalPark(this.state.search)
            .then(res => {
                if (res.data.data === "error") {
                    throw new Error(res.data.data);
                }
                else {
                    let results = res.data.data
                    console.log(results[0])
                    results = results.map(result => {
                        result = {
                            key: result.id,
                            id: result.id,
                            states: result.states,
                            fullName: result.fullName,
                            parkCode: result.parkCode,
                            image: result.images[0].url,
                            description: result.description,
                            url: result.url
                        }
                        return result;
                    })
                    
                    this.setState({ parks: results, error: "" })
                    console.log(this.state.parks)
                }
            })
            .catch(err => this.setState({ error: err.items } ));
    }

    handleSavedButton = event => {
        event.preventDefault();
        console.log(this.state.parks)
        let savedParks = this.state.filter(park => park.id === event.target.id)
        savedParks = savedParks[0];
        API.savePark(savedParks)
            .then(this.setState())
            .then(console.log(this.state.parks))
            .catch(err => console.log(err))
    }
    
    render() {
        return (
            <Container fluid>
                <Jumbotron />
                <Container>
                    <Row>
                        <Col size="12">
                            <Form
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchList parks = {this.state.parks} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }
}

export default Parksearch;