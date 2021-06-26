import React, { useEffect, useState } from "react";
import { Row, Col } from "../Grid";
import API from "../../utils/API";

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
    

    // const [designation, setDesignation] = useState();

  

        API.getIndividualPark(props.parkCode)
        .then(res => {
            if (res.data.data === "error") {
                throw new Error(res.data.data);
            }
            else {
                let results = res.data.data[0]
                console.log(results)
                
                // setDesignation({designation: "test"});

            }
        })


    return (
        <div>
            <h1>test</h1>
        </div>
    )

}
export default ParkInfo;
