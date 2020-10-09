import React, { useState, useEffect } from 'react'
import axios from "axios";

const { REACT_APP_API_URL } = process.env;

function useAsyncHook(queryProducts) {
    const [query] = useState(queryProducts);
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState("false");

    useEffect(() => {
        async function fetchProductList() {

            const reg = new RegExp('^\\d+$');
            if (!reg.test(queryProducts) && queryProducts.length < 3) return false;

            setLoading("true");
            const response = await axios(
                REACT_APP_API_URL + '/ws/api/v1/search/' + queryProducts
            ).then(function (response) {
                console.log(response.data);
                setResult(response.data);
            })

        }

        if (queryProducts !== "") {
            fetchProductList();
        }
    }, [queryProducts]);

    return [result, loading];
}

export default useAsyncHook;