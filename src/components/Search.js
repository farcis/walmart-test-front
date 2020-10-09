import React, { useState } from 'react'
import useAsyncHook from './useAsyncHook'
import Products from './Products'
import QueryInfo from './QueryInfo';
import NavInput from './NavInput';

export default function Search() {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [result, loading] = useAsyncHook(query);

    return (
        <>
        <NavInput search={search} setSearch={setSearch} setQuery={setQuery}/>

        <QueryInfo query={query}/>

        <section className="container py-5" id="itemList">
            <div className="row justify-content-center">
                {loading === "null" ? (<h1>Sin Resultados</h1>) : (<Products result={result}/>)}
            </div>
        </section>
        </>
    );
}