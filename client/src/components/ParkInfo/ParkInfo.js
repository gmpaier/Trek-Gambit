import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Row, Col } from "../Grid";
import "./ParkInfo.css";


const ParkInfo = props => {

    const [data, setData] = useState([])

    useEffect( () => {

        API.getIndividualPark(props.parkCode)
        .then(res => {
            if (res.data.data === "error") {
                throw new Error(res.data.data);
            }
            else {
                let results = res.data.data[0];
                setData(results);
                }
            }
        )
    }, [])



    return (
        <div className = "m-2 p-2 rounded-3 half">
            <br></br>
            <Row className = "row" id = "parkName">
                <h1 className = "text-center">{data.name}</h1>
            </Row>
            <div className = "row">
            {data.images && data.images.splice(0,2).map((image) => {
                return <div className = "col-sm-6 col-md-6 col-lg-4 col-xl-5 p-1">
                    <img src = {image.url} alt = "mapped park" />
                </div>
            })}
            </div>

            <Row >
                <h3>Description: </h3>
                <p>{data.description && data.description}</p>
            </Row>

            <Row >
                <h3>Designation: </h3>
                <p>{data.designation}</p>
            </Row>

            <Row >
                <h3>Fees: </h3>
                {data.entranceFees && <p>${data.entranceFees[0].cost} - {data.entranceFees[0].description}</p>}
            </Row>

            <Row >
                <h3>Address: </h3>
                {data.addresses && <p>{data.addresses[0].line1}</p>}
                {data.addresses && <p>{data.addresses[0].city}, {data.addresses[0].stateCode} {data.addresses[0].postalCode}</p>}
            </Row>
            
            <Row >
                <h3>Weather Info: </h3>
                <p>{data.weatherInfo}</p>
            </Row>



            <Row >
                <h3>Operating Hours: </h3>
                {data.operatingHours && <p>Sunday: {data.operatingHours[0].standardHours.sunday}</p>}
                {data.operatingHours && <p>Monday: {data.operatingHours[0].standardHours.monday}</p>}
                {data.operatingHours && <p>Tuesday: {data.operatingHours[0].standardHours.tuesday}</p>}
                {data.operatingHours && <p>Wednesday: {data.operatingHours[0].standardHours.wednesday}</p>}
                {data.operatingHours && <p>Thursday: {data.operatingHours[0].standardHours.thursday}</p>}
                {data.operatingHours && <p>Friday: {data.operatingHours[0].standardHours.friday}</p>}
                {data.operatingHours && <p>Saturday: {data.operatingHours[0].standardHours.saturday}</p>}
                {data.operatingHours && <p>{data.operatingHours[0].description}</p>}
            </Row>


            <Row >
                <h3>Contact: </h3>
                <p>{data.contacts && <p>Phone Number: {data.contacts.phoneNumbers[0].phoneNumber} <br /> Email: <a href={`mailto:${data.contacts.emailAddresses[0].emailAddress}`}>{data.contacts.emailAddresses[0].emailAddress}</a></p>}</p>
            </Row>
        </div>
    )

}
export default ParkInfo;
