import React from 'react';

class SearchInput extends React.Component {

    render() {
        return (
            <nav className="container navbar" id="searcher">
                <form className="form-inline">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </nav>
        )
    }

}

export default SearchInput;