import React, { useState, useEffect, useRef } from 'react'
import { Image, Badge } from 'react-bootstrap'

function useAsyncHook(queryProducts) {
    const [query] = React.useState(queryProducts);
    const [result, setResult] = React.useState([]);
    const [loading, setLoading] = React.useState("false");
    
    React.useEffect(() => {
        async function fetchBookList() {
            try {
                setLoading("true");
                const response = await fetch(
                `http://localhost:8080/ws/api/v1/search/${queryProducts}`
                );
        
                const json = await response.json();
                setResult(json);
            } catch (error) {
                setLoading("null");
            }
        }
    
        if (queryProducts !== "") {
        fetchBookList();
        }
    }, [queryProducts]);
    
    return [result, loading];
}

export default function Search() {
    const [search, setSearch] = React.useState("");
    const [query, setQuery] = React.useState("");
    const [result, loading] = useAsyncHook(query);

    // RENDER PRODUCTS 
    let productComponents = result.map((item) => {
        return (
            <>
            <div className="card">
                <Image className="card-img-top" src={"http://"+item.image} rounded />
                <div className="card-body">
                    <h4 className="card-title"><strong>{item.brand}</strong> <span className="description">{item.description}</span></h4>
                    <p className="card-text">${(item.discount)?(item.finalPrice  ):(item.price)}     
                    {(item.discount)?(<Badge variant="danger">{item.discount}</Badge>):(<span></span>)}</p>
                    <a href="#" className="btn btn-primary">Agregar</a>
                </div>
            </div>
            </>
        );
    })

    return (
        <>
        <nav className="container navbar justify-content-center" id="searcher">
            <form className="form-inline"
                onSubmit={e => {
                    e.preventDefault();
                    setQuery(search);
                }} 
            >
                <input className="form-control" type="search" 
                onChange={e => setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
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
      
