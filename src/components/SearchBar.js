import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/fontawesome-free-solid';

class SearchBar extends React.Component {
    render(){
        return(
            <div className="search-container row">
                <button 
                    className="search-button col-sm-6"
                >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <input type="text" placeholder="Search.." className="col-sm-6"></input>
            </div>
        )
    }
}

export default SearchBar;