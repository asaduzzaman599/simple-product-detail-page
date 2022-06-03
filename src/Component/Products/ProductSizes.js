import React from 'react';
import ProductSize from './ProductSize';

const ProductSizes = ({ state }) => {
    const skuSize = state?.sizes?.find(size => size?.id === state?.selectedSku?.props[1])

    return (
        <div className='px-4 py-2 bg-white mt-6'>
            <h3 className='text-gray-500 font-medium text-xl'>Size: <span className='text-black'> {skuSize?.name}</span></h3>
            <div className='grid grid-cols-5 gap-4 mt-4'>
                {
                    state?.sizes?.map(product => <ProductSize key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default ProductSizes;