import React from 'react';

import SearchInput from '../SearchInput/SearchInput';
import ItemList from '../ItemsList/ItemsList';
import Paginator from '../Paginator/Paginator';


class Home extends React.Component {

    render() {
        return (
            <>
                <SearchInput />

                <main role="main" className="flex-shrink-0 mt-5">
                    <ItemList />
                </main>

                <Paginator />
            </>
        )

    }

}

export default Home;