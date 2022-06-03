import React, { useContext } from 'react';
import { ContextProduct } from '../ReducerAndContext/ProductContext';
import PriceSection from './PriceSection';
import ProductColors from './Products/ProductColors';
import ProductSizes from './Products/ProductSizes';

const ProductInfo = ({ state }) => {
    console.log(state.productInfo)
    return (
        <div className='flex-1 '>
            <h3 className='bg-[#F1DC41] p-4'>{state?.title.length > 60 ? state?.title.slice(0, 50) + '...' : state?.title.length}</h3>

            <PriceSection state={state}></PriceSection>
            <ProductColors state={state} />
            <ProductSizes state={state} />
        </div>
    );
};

export default ProductInfo;