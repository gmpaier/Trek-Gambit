import React from "react";
import { Row } from "../Grid";
import "./ParkInfo.css";


const ParkInfo = props => {


    return (
        <div className = "m-2 p-2 rounded-3 half">
            {/* <br /> */}
            <Row className = "row" id = "parkName">
                <div className = "jumbotron">{props.name}</div>
            </Row>
            <div className = "row">
            {props.images && props.images.splice(0,2).map((image) => {
                return <div className = "col-sm-6 col-md-6 col-lg-4 col-xl-5 p-1">
                    <img src = {image.url} alt = "mapped park" />
                </div>
            })}
            </div>

            <Row >

                <h2>Description:</h2>
                <h3>{props.description && props.description}</h3>
            </Row>

            <Row >
                <h2>Designation:</h2>
                <h3>{props.designation}</h3>
            </Row>

            <Row >
                <h2>Fees:</h2>
                {props.entranceFees && <h3>${props.entranceFees[0].cost} - {props.entranceFees[0].description}</h3>}
            </Row>

            <Row >
                <h2>Address:</h2>
                {props.addresses && <h3>{props.addresses[0].line1}</h3>}
                {props.addresses && <h3>{props.addresses[0].city}, {props.addresses[0].stateCode} {props.addresses[0].postalCode}</h3>}
            </Row>
            
            <Row >
                <h2>Weather Info:</h2>
                <h3>{props.weatherInfo}</h3>
            </Row>



            <Row >
                <h2>Operating Hours:</h2>
                {props.operatingHours && <h3>Sunday: {props.operatingHours[0].standardHours.sunday}</h3>}
                {props.operatingHours && <h3>Monday: {props.operatingHours[0].standardHours.monday}</h3>}
                {props.operatingHours && <h3>Tuesday: {props.operatingHours[0].standardHours.tuesday}</h3>}
                {props.operatingHours && <h3>Wednesday: {props.operatingHours[0].standardHours.wednesday}</h3>}
                {props.operatingHours && <h3>Thursday: {props.operatingHours[0].standardHours.thursday}</h3>}
                {props.operatingHours && <h3>Friday: {props.operatingHours[0].standardHours.friday}</h3>}
                {props.operatingHours && <h3>Saturday: {props.operatingHours[0].standardHours.saturday}</h3>}
                {props.operatingHours && <h3>{props.operatingHours[0].description}</h3>}
            </Row>


            <Row >
                <h2>Contact:</h2>
                <h3>{props.contacts && <h3>Phone Number: {props.contacts.phoneNumbers[0].phoneNumber} <br /> Email: <a href={`mailto:${props.contacts.emailAddresses[0].emailAddress}`}>{props.contacts.emailAddresses[0].emailAddress}</a></h3>}</h3>

            </Row>
        </div>
    )

}
export default ParkInfo;
