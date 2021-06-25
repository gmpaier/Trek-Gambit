import React from "react";

const Form = props => {
    return (
        <form>
            <div className="form-group">
                <label className="ParkSearchLabel text-white"><h3>SEARCH FOR A PARK:</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchPark"
                    placeholder="Search for a park!"
                    onChange={props.handleInputChange}
                />
            </div>
            <br />
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Find Parks
            </button>
        </form>
    )
}

export default Form;