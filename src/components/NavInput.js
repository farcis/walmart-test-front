import React from 'react'

export default function NavInput(props) {

    return (
        <>
        <nav className="container navbar justify-content-center" id="searcher">
            <form data-testid="formsubmit" className="form-inline"
                onSubmit={e => {
                    e.preventDefault();
                    props.setQuery(props.search);
                }}
            >
                <input data-testid="searchbox" className="form-control" type="search"
                    onChange={e => props.setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
            </form>
        </nav>
        </>
    )
}