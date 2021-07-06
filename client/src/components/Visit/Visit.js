import React, {useState, useEffect} from "react";
import API from "../../utils/API";
import "./visit.css";

const Visit = props => {
    
    const [activity, setActivity] = useState("");
    const [actLength, setActLength] = useState("");
    const [unit, setUnit] = useState("");
    const [body, setBody] = useState("");
    const [status, setStatus] = useState("");
    const [rating, setRating] = useState("");

    const handleActivity = event => {
        setActivity(event.target.value);
      };

    const handleLength = event => {
        setActLength(event.target.value);
    }

    const handleUnit = event => {
        setUnit(event.target.value);
    }

    const handleBody = event => {
        setBody(event.target.value);
    }

    const handleStatus = event => {
        setStatus(event.target.value);
    }

    const handleRating = event => {
        setRating(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        API.saveVisit({
          park: props.name,
          activity: activity,
          length: actLength,
          unit: unit,
          body: body,
          status: status,
          rating: rating,
          image: props.images[0].url
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div id = "half">
        <form>
            <br />
            <div className="form-group halfvisit rounded-3 p-1">

                <label className="visit-status"><h3>Visit Status</h3></label>
                <br></br>
                <select name="status-select" id="status-select" onChange={handleStatus}>
                    <option value="">-- Select --</option>
                    <option value="Planned">Plan to Visit</option>
                    <option value="Visited">Visited</option>
                </select>
                <br></br>

                <label className="activity"><h3>What did you do there?</h3></label>
                <br></br>
                <select name="activity-list" id="activity-list" onChange={handleActivity}>
                {props.activities && props.activities.map((activity) => {
                    return <option value = {activity.name}>{activity.name}</option>
                })}
                </select>
                <br></br>

                <label className = "duration"><h3>What is the Duration?</h3></label>
                <br />
                <input type="number" name="duration" onChange={handleLength}/>
                <select onChange={handleUnit}>
                    <option value="">-- Select --</option>
                    <option value = "miles">Miles</option>
                    <option value = "min">Minutes</option>
                    <option value = "hrs">Hours</option>
                </select>
                <br />
                <label className="rating"><h3>What would you rate this park?</h3></label>
                <br></br>
                <select name="rating-list" id="rating-list" onChange={handleRating}>
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
                <textarea id = "review" name = "review" rows= "10" onChange={handleBody}></textarea>


            </div>
            <br />
            <button type="submit" className="submitBtn btn btn-dark btn-block" onClick={handleSubmit}>
                Enter
            </button>
        </form>
        </div>
    )
}

export default Visit;
