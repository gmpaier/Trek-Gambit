import React, { Component } from "react";
import { Container } from "../../components/Grid";
import LeadTable from "../../components/LeadTable/LeadTable";
// import axios from "axios";

class Leaderboard extends Component {


    render() {
        return (
            <Container fluid>
                <LeadTable />
            </Container>
        )
    }
}

export default Leaderboard;