import React, { useContext } from 'react';
import { ContextProduct } from '../ReducerAndContext/ProductContext';
import PriceSection from './PriceSection';
import Products from './Products/Products';

const ProductInfo = () => {
    const [state] = useContext(ContextProduct)
    return (
        <div className='flex-1 '>
            <h3 className='bg-[#F1DC41] p-4'>{state?.title.length > 60 ? state?.title.slice(0, 50) + '...' : state?.title.length}</h3>

            <PriceSection state={state}></PriceSection>
            <Products />
        </div>
    );
};

export default ProductInfo;