// ------ Dependencies ------

import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"


// ------ SavedResult as a component which is used by ../pages/SaveBooks

const SavedResult = props => {
    // Conditional(ternary) operator if no books saved, render a card with nothing
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h4>Books that you saved</h4>
                </div>
            </div>
        </div>
    // if there is more than 0 books saved in the database, render them in a formatted manner
    ):(
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h4>Books that you saved</h4>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                    {/* Thumbnail */}
                                    <Col size="2" className="bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    {/* Info */}
                                    <Col size="9" className="bookInfo">
                                        {/* Title */}
                                        <Row>
                                            <h2 className="bookTitle">{savedbook.title}</h2>
                                        </Row>
                                        {/* Author */}
                                        <Row>
                                            <h3 className="bookAuthor">{savedbook.authors}</h3>
                                        </Row>
                                        {/* Description */}
                                        <Row>
                                            <p className="bookDescription">{savedbook.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteBook btn btn-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete Book
                                    </button>
                                    <a href={savedbook.link} target="_blank" rel="noopener noreferrer">
                                        <button className="viewBook btn btn-success">
                                            View Book
                                        </button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}


// ------ Export ------
export default SavedResult