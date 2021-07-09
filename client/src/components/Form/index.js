import React from "react";

const Form = props => {
    return (
        <form>
            <br />
            <div className="form-group">


                <label className="ParkSearchLabel"><h2>Park Search</h2></label>

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
            <button type="submit" className="submitBtn btn btn-dark" onClick={props.handleFormSubmit}>
                Enter
            </button>
        </form>
    )
}

export default Form;