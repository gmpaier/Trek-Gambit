import React from "react";
import "./visit.css";

function Visit() {
    return (
        <div id = "">
        <form>
            <br />
            <div className="form-group">

                <label className="visit-status"><h3>Visit Status</h3></label>
                <br></br>
                <select name="status-select" id="status-select">
                    <option value="">--Please choose an option--</option>
                    <option value="Planned">Plan to Visit</option>
                    <option value="Visited">Visited</option>
                </select>
                <br></br>

                <label className="activity"><h3>What did you do there?</h3></label>
                <br></br>
                <select name="activity-list" id="activity-list">
                    <option value="">--Please choose an option--</option>
                    <option value="hiking">Hiking</option>
                    <option value="biking">Biking</option>
                    <option value="walking">Walking</option>
                    <option value="swimming">Swimming</option>
                    <option value="camping">Camping</option>
                </select>
                <br></br>

                <label className = "duration"><h3>What is the Duration?</h3></label>
                <br />
                <input type="number" name="duration" />
                <select>
                    <option value = "miles">Miles</option>
                    <option value = "min">Minutes</option>
                    <option value = "hrs">Hours</option>
                </select>
                <br />
                <label className="rating"><h3>What would you rate this park?</h3></label>
                <br></br>
                <select name="rating-list" id="rating-list">
                    <option value="">--Please choose an option--</option>
                    <option value="one">⭐</option>
                    <option value="two">⭐⭐</option>
                    <option value="three">⭐⭐⭐</option>
                    <option value="four">⭐⭐⭐⭐</option>
                    <option value="five">⭐⭐⭐⭐⭐</option>
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
