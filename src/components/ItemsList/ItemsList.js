import React from 'react';

import Item from '../Item/Item'

class ItemList extends React.Component {

    render() {
        return (
            <section className="container py-5" id="itemList">
                <div className="row">
                    <Item />
                    <Item />
                    <Item />
                </div>
            </section>
        )
    }

}

export default ItemList;