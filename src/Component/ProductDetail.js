import React, { useContext, useEffect } from 'react';
import { axiosBase } from '../api/api';
import { ContextProduct } from '../ReducerAndContext/ProductContext';
import Gallery from './Gallery';
import Loading from './Loading';
import ProductInfo from './ProductInfo';
import TopBreadcrumbs from './TopBreadcrumbs';

const ProductDetail = () => {
    const [state, dispatch] = useContext(ContextProduct)

    // load data
    useEffect(() => {
        dispatch({ type: "loading", payload: true })
        axiosBase.get('/').then(({ data }) => {
            dispatch({ type: 'load', payload: data })
        }).catch(err => {
            dispatch({ type: "error", payload: err })
        })
    }, [])

    if (state?.loading) {
        return <Loading></Loading>
    }

    return (
        <div className='min-h-screen'>

            <TopBreadcrumbs />
            <div className=' lg:flex h-full bg-[#D9D9D9] gap-6'>
                <Gallery state={state} />
                <ProductInfo state={state} />
            </div>

        </div>
    );
};

export default ProductDetail;