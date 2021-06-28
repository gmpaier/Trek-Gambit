import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Row, Col } from "../Grid";


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
    

    const [data, setData] = useState({})

    useEffect( () => {

        API.getIndividualPark(props.parkCode)
        .then(res => {
            if (res.data.data === "error") {
                throw new Error(res.data.data);
            }
            else {
                let results = res.data.data[0]
                // console.log(results);
                setData(results);
                console.log(results)
                }
            }
        )
    }, [])



    return (
        <Row className = "row">
            <h1 className = "text-center">{data.fullName}</h1>
            
        </Row>
            


    )

}
export default ParkInfo;
