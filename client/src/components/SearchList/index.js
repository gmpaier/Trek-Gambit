import React from "react";
import { Row, Col } from "../Grid";

const SearchList = props => {

    console.log(props);
    return (props.parks.length === 0) ? (
        <div className="card-main">
            <div className="card-body player">
                <div className="article">
                    {/* <h2 className = "text-white text-center">Parks Found</h2> */}
                </div>
            </div>
        </div>
    ) : (
            <div className="card-main">
                <div className="card-body player">
                    <div className="article">


                        <h3 className = "text-white text-center">Parks Found</h3>
                        {props.parks.map(park => {
                           return (
                                <div className = "article">
                                    <li className="card-list searchbg rounded-3">
                                      <Row className="SearchResult row" id={park.id + "Card"} key={park._id}>
                                            <Row>
                                                <h3 className="parkFullname text-center">{park.fullName}</h3>
                                            </Row>

                                            <Row>
                                                <h4 className="parkStates text-center">{"State(s): "}{park.states.replace(/,/g, ", ")}</h4>
                                            </Row>
                                            
                                            <Col size = "2"></Col>
                                            <Col size = "8" className="parkImage">
                                                <img src={park.image} alt={park.fullName} className = "border border-dark w-100 h-100" />
                                            </Col>
                                            <Col size = "2"></Col>
                                            <Col size = "2"></Col>
                                            <Col size="8" className="parkInfo"></Col>
                                            <Row>
                                                <p className = "text-center">{park.description}</p>
                                            </Row>
                                            
                                            <Col size = "2"></Col>
                                        </Row>
                                        <br></br>
                                        <Row className = "text-center">
                                            <Col size = "6" className =  "text-center">
                                                <button className="btn btn-default btn-block btn-dark btn-lg text-decoration-none text-center">
                                                <a href={park.url} target="_blank" rel="noopener noreferrer" className = "text-reset text-decoration-none">
                                                    View Online
                                                </a>
                                                </button>
                                            </Col>
                                            <Col size = "6" className = "text-center">
                                                <a href={'/park/?parkCode=' + park.parkCode} >
                                                    <button className = "btn btn-dark btn-lg text-center"> 
                                                        View Park Page
                                                    </button>
                                                </a>
                                            </Col>
                                        </Row>
                                        
                                    </li>
                                    <br></br>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchList