// ------ Dependencies ------

import React from "react";
import "./style.css";
import {Row, Col} from "../Grid"


// ------ SearchResult ------

const SearchResult = props => {
    // Conditional(ternary) operator to render returned list from Google, if 0 results, render
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="article">
                    <h4>Here is a list of books that Google returned</h4>
                </div>
            </div>
        </div>
    // if more than 0 results, render
    ) : (
            <div className="card">
                <div className="card-body">
                    <div className="article">
                        <h4>Here is a list of books that Google returned</h4>
                        {props.books.map(book => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                        {/* Thumbnail */}
                                        <Col size="2" className="bookImage">
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="1" className="emptyCol"/>
                                        {/* Info */}
                                        <Col size="9" className="bookInfo">
                                            {/* Title */}
                                            <Row>
                                                <h4 className="bookTitle">{book.title}</h4>
                                            </Row>
                                            {/* Author */}
                                            <Row>
                                                <h5 className="bookAuthor">{book.author}</h5>
                                            </Row>
                                            {/* Description */}
                                            <Row>
                                                <p className="bookDescription">{book.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="buttonDiv">
                                    <   button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Book
                                        </button>
                                        <a href={book.link} target="_blank" rel="noopener noreferrer">
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
export default SearchResult