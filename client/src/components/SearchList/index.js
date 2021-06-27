import React from "react";
import { Row, Col } from "../Grid";
import "./SearchList.css";

const SearchList = props => {

    console.log(props);
    return (props.parks.length === 0) ? (
        <div className="card-main">
            <div className="card-body player">
                <div className="article">
                    <h3>Parks Found</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card-second">
                <div className="card-body player">
                    <div className="article">

                        <h3>Parks Found</h3>
                        {props.parks.map(park => {
                           return (
                                <section className = "rounded-3">
                                    <li className="search-list list-group-item rounded-3">
                                        <Row className="SearchResult row" id={park.id + "Card"} key={park._id}>
                                            <Col size = "2"></Col>
                                            <Col size="8" className="parkImage">
                                                <img src={park.image} alt={park.fullName} className = "border border-dark" />
                                            </Col>
                                            <Col size = "2"></Col>
                                            <Col size="9" className="parkInfo">
                                                <Row>
                                                    <h3 className="parkFullname text-center">{park.fullName}</h3>
                                                </Row>
                                                <Row>
                                                    <h4 className="parkStates text-center">{"State(s): "}{park.states.replace(/,/g, ", ")}</h4>
                                                </Row>
                                                <Row>
                                                 <p className = "text-center">{park.description}</p>
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <Col className="buttonDiv" size = "12">
                                            <button className="btn btn-secondary btn-lg">
                                            <a href={park.url} target="_blank" rel="noopener noreferrer">
                                                View Online
                                            </a>
                                            </button>

                                            <a href={'/park/?parkCode=' + park.parkCode} >
                                                <button className = "btn"> 
                                                    View Park Page
                                                </button>
                                            </a>
                                        </Col>
                                    </li>
                                    <br></br>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchList