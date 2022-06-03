import React, { useContext, useEffect } from 'react';
import { axiosBase } from '../api/api';
import { ContextProduct } from '../ReducerAndContext/ProductContext';

const ProductDetail = () => {
    const [state, dispatch] = useContext(ContextProduct)


    useEffect(() => {
        axiosBase.get('/').then(({ data }) => {
            console.log(data)
            dispatch({ type: 'load', payload: data })
        })
    }, [])

    console.log(state)
    return (
        <div>

        </div>
    );
};

export default ProductDetail;