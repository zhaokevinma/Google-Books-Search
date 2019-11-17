// ------ Dependencies ------

import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container} from "../components/Grid";
import SavedResult from "../components/SavedResult"


// ------ React class to render state ------

class SaveBook extends Component {
    // Initialize/create a state
    state = {
        savedBooks: []
    };

    // Similar to document.ready(), when this compent did mount, 
    componentDidMount() {
        // Use API.getBooks to get saved books from database
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }

    // Hanldes click event for deleting a saved book
    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    // Render
    render() {
        return (
            <Container fluid className="container">
                <Jumbotron />
                <Container>
                    <SavedResult savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
        )
    }
}


// ------ Export ------

export default SaveBook 