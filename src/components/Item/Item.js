import React from 'react';

class Item extends React.Component {

    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="img_avatar1.png" alt="Card image"/>
                <div className="card-body">
                    <h4 className="card-title">Titulo producto 1</h4>
                    <p className="card-text">descripcion de producto 1</p>
                    <a href="#" className="btn btn-primary">Agregar</a>
                </div>
            </div>
        )
    }

}

export default Item;