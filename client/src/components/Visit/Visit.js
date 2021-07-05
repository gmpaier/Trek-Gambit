import React, {useState, useEffect} from "react";
// import API from "../../utils/API";
import "./visit.css";

const Visit = props => {

    // const [data, setData] = useState([])

    // useEffect( () => {

    //     API.getIndividualPark(props.parkCode)
    //     .then(res => {
    //         if (res.data.data === "error") {
    //             throw new Error(res.data.data);
    //         }
    //         else {
    //             let results = res.data.data[0];
    //             setData(results);
    //             console.log(results);
    //             }
    //         }
    //     )
    // }, [])


    return (
        <div id = "half">
        <form>
            <br />
            <div className="form-group halfvisit rounded-3 p-1">

                <label className="visit-status"><h3>Visit Status</h3></label>
                <br></br>
                <select name="status-select" id="status-select">
                    <option value="">-- Select --</option>
                    <option value="Planned">Plan to Visit</option>
                    <option value="Visited">Visited</option>
                </select>
                <br></br>

                <label className="activity"><h3>What did you do there?</h3></label>
                <br></br>
                <select name="activity-list" id="activity-list">
                {props.activities && props.activities.map((activity) => {
                    return <option value = {activity.name}>{activity.name}</option>
                })}
                </select>
                <br></br>

                <label className = "duration"><h3>What is the Duration?</h3></label>
                <br />
                <input type="number" name="duration" />
                <select>
                    <option value="">-- Select --</option>
                    <option value = "miles">Miles</option>
                    <option value = "min">Minutes</option>
                    <option value = "hrs">Hours</option>
                </select>
                <br />
                <label className="rating"><h3>What would you rate this park?</h3></label>
                <br></br>
                <select name="rating-list" id="rating-list">
                    <option value="">-- Select --</option>
                    <option value="1">⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
                <br></br>
                <label className="review"><h3>Review</h3></label>
                <br></br>
                <textarea id = "review" name = "review" rows= "10"></textarea>


            </div>
            <br />
            <button type="submit" className="submitBtn btn btn-dark btn-block" onClick={(event) => event.preventDefault()}>
                Enter
            </button>
        </form>
        </div>
    )
}

export default Visit;
