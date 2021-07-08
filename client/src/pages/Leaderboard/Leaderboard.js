import React, { Component } from "react";
import API from "../../utils/API";
import { Container } from "../../components/Grid";
import LeadTable from "../../components/LeadTable";

class Leaderboard extends Component {

    state = {
        data: {}
    }

    componentDidMount() {
        API.getCountByPark().then(res => {
            if(res.data.data === "error") {
                throw new Error(res.data.data);
            } else {
                let results = res.data.data;
                this.setState({data: results});
            }
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container fluid>
                <LeadTable
                name = {this.state.name}
                visits = {this.state.visits} />
            </Container>
        )
    }
}

export default Leaderboard;