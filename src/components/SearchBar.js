import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/fontawesome-free-solid';

class SearchBar extends React.Component {
    render(){
        return(
            <div className="search-container">
                <button className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <input type="text" placeholder="Search.."></input>
            </div>
        )
    }
}

export default SearchBar;