import React, { useContext } from 'react';
import { ContextProduct } from '../../ReducerAndContext/ProductContext';
import ProductColor from './ProductColor';

const ProductColors = ({ state }) => {


    const skuColor = state?.colors?.find(color => color?.id === state?.selectedSku?.props[0])
    console.log(state?.colors)
    return (
        <div className='py-2 px-4 bg-white mt-6'>
            <h3 className='text-gray-500 font-medium text-xl'>Color: <span className='text-black'> {skuColor?.name}</span></h3>
            <div className='flex flex-wrap gap-6 mt-4'>
                {
                    state?.colors?.map(product => <ProductColor key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductColors;