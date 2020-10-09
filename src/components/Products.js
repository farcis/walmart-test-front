import React from 'react'
import { Image, Badge } from 'react-bootstrap'

export default function Products(props) {

    return props.result.map((item, index) => (
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
    ))
}