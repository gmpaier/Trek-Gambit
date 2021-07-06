import React, { Component } from "react";
import API from "../utils/API";
import { Container, Row, Col} from "../components/Grid";
import ParkInfo from "../components/ParkInfo/ParkInfo";
import Visit from "../components/Visit/Visit";

let params = new URLSearchParams(document.location.search.substring(1));
let parkCode = params.get("parkCode");
console.log(parkCode);

class Park extends Component {

  state = {
    data: {}
  }

  componentDidMount() {
    API.getIndividualPark(parkCode)
    .then(res => {
      if (res.data.data === "error") {
          throw new Error(res.data.data);
      }
      else {
          let results = res.data.data[0];
          this.setState({data: results});
          }
      })
        .catch(err => console.log(err))
  }

  render() {
    return (
        <Container fluid>
            <Row className = "row">
                <Col size = "8">
                    <ParkInfo 
                    name = {this.state.data.name}
                    images = {this.state.data.images}
                    description = {this.state.data.description}
                    designation = {this.state.data.designation}
                    entranceFees = {this.state.data.entranceFees}
                    addresses = {this.state.data.addresses}
                    weatherInfo = {this.state.data.weatherInfo}
                    operatingHours = {this.state.data.operatingHours}
                    contacts = {this.state.data.contacts}/>
                </Col>
                <Col size = "4">
                    <Visit 
                    activities = {this.state.data.activities}
                    parkCode = {parkCode}
                    />
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Park;