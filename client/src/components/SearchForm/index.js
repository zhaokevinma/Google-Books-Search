// ------ Dependencies ------

import React from "react";
import "./style.css";


// ------ Search form -------

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h4>Search for books here</h4></label>
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="What are you looking for?"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-secondary" onClick={props.handleFormSubmit}>
                Search
            </button>
        </form>
    )
}


// ------ Export ------
export default SearchForm