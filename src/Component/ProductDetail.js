import React, { useContext, useEffect } from 'react';
import { axiosBase } from '../api/api';
import { ContextProduct } from '../ReducerAndContext/ProductContext';
import Gallery from './Gallery';
import ProductInfo from './ProductInfo';
import TopBreadcrumbs from './TopBreadcrumbs';

const ProductDetail = () => {
    const [state, dispatch] = useContext(ContextProduct)


    useEffect(() => {
        axiosBase.get('/').then(({ data }) => {

            dispatch({ type: 'load', payload: data })
        })
    }, [])

    return (
        <div className='min-h-screen'>
            <TopBreadcrumbs />

            <div className=' lg:flex h-full bg-[#D9D9D9] h-full gap-10'>
                <Gallery state={state} />
                <ProductInfo state={state} />
            </div>
        </div>
    );
};

export default ProductDetail;