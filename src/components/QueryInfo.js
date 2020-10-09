import React from 'react'

export default function QueryInfo(props) {

    return (
        <>
        <div className="container">
            <p id="info">Resultados para: <strong>{props.query}</strong></p>
        </div>
        </>
    )
}