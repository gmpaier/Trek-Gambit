import React from "react";
import { Row, Col } from "../Grid";
import "./SearchList.css";

const SearchList = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Parks found: </h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card">
                <div className="card-body player">
                    <div className="article">
                        <h3>Parks found: </h3>
                        {props.books.map(book => {
                            return (
                                <section>
                                    <li className="search-list list-group-item">
                                        <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                            <Col size="2" className="bookImage">
                                                <img src={"Image"} alt={"Title"} />
                                            </Col>
                                            <Col size="1" className="emptyCol" />
                                            <Col size="9" className="bookInfo">
                                                <Row>
                                                    <h3 className="bookTitle">"Title JSX"</h3>
                                                </Row>
                                                <Row>
                                                    <h4 className="bookAuthor">Author JSX</h4>
                                                </Row>
                                                <Row>
                                                 Description JSX
                                                </Row>
                                            </Col>
                                        </Row>
                                        <br></br>
                                        <Row className="buttonDiv">
                                            <button className="saveBook btn btn-info" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                                Save
                                        </button>
                                            <a href={book.link} target="_blank" rel="noopener noreferrer">
                                                <button className="viewBook btn btn-success">
                                                    View Online
                                            </button>
                                            </a>
                                        </Row>
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