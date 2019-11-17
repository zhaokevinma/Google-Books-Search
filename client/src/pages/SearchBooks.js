// ------ Dependencies ------

import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container, Row, Col } from "../components/Grid";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"


// ------ React class to render state ------ 

class SearchBooks extends Component {
    // Initialize/create a state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    // Handles user input from text input field 
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    // Handles button click event for submitting search from user
    handleFormSubmit = event => {
        // Do not refresh the page when cliced 
        event.preventDefault();
        // Upon click, API.getGoogleSearchs is called -> query send to Google Books API
        API.getGoogleSearchBooks(this.state.search)
            // Results from Google Books API
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // Hold response in array "results"
                    let results = res.data.items
                    // Map through the array 
                    results = results.map(result => {
                        // Store each book information in a new object "result"
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        // Return is not necessary but is a better practice to avoid warnings
                        return result;
                    })
                    // Update state with the books(now objects) stored in "results" array
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }

    // Handles button click event for saving a book into database
    handleSavedButton = event => {
        // Do not refresh the page
        event.preventDefault();
        // Testing purpose - NOT essential to app functionality
        console.log(this.state.books)
        // This can be replaced with a prop method, here using event.target
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        // After filtering, grap the filtered array's 1st entry
        savedBooks = savedBooks[0];
        // Send this book to API.saveBooks to save to database
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err.response))
    }

    // Renders components and state
    render() {
        return (
            <Container fluid>
                <Jumbotron />
                <Container>
                    <Row>
                        <Col size="12">
                            <SearchForm
                                handleFormSubmit={this.handleFormSubmit}
                                handleInputChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <SearchResult books={this.state.books} handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }

}


// ------ Export SearchBooks ------
export default SearchBooks