import React, { Component } from "react";
import API from "../../utils/API";
import { Container} from "../../components/Grid";
import ProfileBanner from "../../components/Profile/ProfileBanner";
import Feed from "../../components/Feed/Feed";

class Profile extends Component {

    state = {
        savedVisits: []
    };

    

    componentDidMount() {
    API.getMyVisits()
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
                <ProfileBanner />
                <Feed visits = {this.state.savedVisits}/>
            </Container>
        )
    }
}

export default Profile;