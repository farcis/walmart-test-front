import React, { useState, useEffect, useRef } from 'react'
import { Image, Badge } from 'react-bootstrap'
import axios from 'axios'
import useAsyncHook from './useAsyncHook'

export default function Search() {
    const [search, setSearch] = React.useState("");
    const [query, setQuery] = React.useState("");
    const [result, loading] = useAsyncHook(query);

    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    // RENDER PRODUCTS 
    let productComponents = result.map((item, index) => {
        return (
            <>
                <div className="card">
                    <Image className="card-img-top" src={"http://" + item.image} rounded />
                    <div className="card-body">
                        <h4 className="card-title"><strong>{item.brand}</strong> <span className="description">{item.description}</span></h4>
                        <p className="card-text">${(item.discount) ? (item.finalPrice) : (item.price)}
                            {(item.discount) ? (<Badge className="pl-2" variant="danger">{item.discount}%</Badge>) : (<span></span>)}</p>
                        <a href="#" className="btn btn-primary">Agregar</a>
                    </div>
                </div>
            </>
        );
    })

    return (
        <>
            <nav className="container navbar justify-content-center" id="searcher">
                <form data-testid="formsubmit" className="form-inline"
                    onSubmit={e => {
                        e.preventDefault();
                        setQuery(search);
                    }}
                >
                    <input data-testid="searchbox" className="form-control" type="search"
                        onChange={e => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
                </form>
            </nav>

            <div className="container">
                <p>Resultados para: <strong>{query}</strong></p>
            </div>

            <section className="container py-5" id="itemList">
                <div className="row justify-content-center">
                    {loading === "null" ? (<h1>Sin Resultados</h1>) : (productComponents)}
                </div>
            </section>
        </>
    );
}