import React, { useContext, useEffect } from 'react';
import { axiosBase } from '../api/api';
import { ContextProduct } from '../ReducerAndContext/ProductContext';
import TopBreadcrumbs from './TopBreadcrumbs';

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
        <div className=''>
            <TopBreadcrumbs></TopBreadcrumbs>
        </div>
    );
};

export default ProductDetail;