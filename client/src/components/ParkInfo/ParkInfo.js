import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Row, Col } from "../Grid";
import "./ParkInfo.css";


const ParkInfo = props => {

        // activities: activities
        // description: description
        // designation: designation
        // directions: directionsUrl
        // feeCost: entranceFees[0].cost
        // feeTitle: entranceFees[0].title
        // feeDescription: entranceFees[0].description
        // fullName: fullName
        // images: []images Array
        // name: name
        // states: states Array
        // weather: weatherInfo
    

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
                console.log(results);
                }
            }
        )
    }, [])



    return (
        <div className = "bg-white m-2 p-2 rounded-3">
            <br></br>
            <Row className = "row" id = "parkName">
                <h1 className = "text-center">{data.fullName}</h1>
            </Row>
            <div className = "row">
            {data.images && data.images.splice(0,2).map((image) => {
                return <div className = "col-sm-6 col-md-6 col-lg-4 col-xl-5 p-1">
                    <img src = {image.url} alt = "mapped park" />
                </div>
            })}
            </div>
            
            <Row >
                <h3>Weather Info: </h3>
                <br />
                <p>{data.weatherInfo}</p>
            </Row>
            <Row >
                <h3>Designation: </h3>
                <br />
                <p>{data.designation}</p>
            </Row>
            <Row >
                <h3>Contact: </h3>
                <br />
                <p>{data.contacts && <p>Phone Number: {data.contacts.phoneNumbers[0].phoneNumber} <br /> Email: {data.contacts.emailAddresses[0].emailAddress}  </p>}</p>
            </Row>
            <Row >
                <h3>Weather Info: </h3>
                <br />
                <p>{data.weatherInfo}</p>
            </Row>
            <Row >
                <h3>Weather Info: </h3>
                <br />
                <p>{data.weatherInfo}</p>
            </Row>
            <Row >
                <h3>Weather Info: </h3>
                <br />
                <p>{data.weatherInfo}</p>
            </Row>

        </div>
    )

}
export default ParkInfo;
