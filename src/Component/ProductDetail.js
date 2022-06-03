import React, { useContext, useEffect } from 'react';
import { axiosBase } from '../api/api';
import { ContextProduct } from '../ReducerAndContext/ProductContext';

const ProductDetail = () => {
    const value = useContext(ContextProduct)

    const [state, dispatch] = value
    useEffect(() => {
        axiosBase.get('/').then(({ data }) => {
            console.log(data)
            dispatch({ type: 'load', payload: data })
        })
    }, [])
    return (
        <div>

        </div>
    );
};

export default ProductDetail;