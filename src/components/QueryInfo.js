import React from 'react'

export default function QueryInfo(props) {

    return (
        <>
        <div className="container">
            <p>Resultados para: <strong>{props.query}</strong></p>
        </div>
        </>
    )
}