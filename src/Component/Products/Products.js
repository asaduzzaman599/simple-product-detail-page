import React, { useContext } from 'react';
import { ContextProduct } from '../../ReducerAndContext/ProductContext';
import Product from './Product';

const Products = () => {

    const [state, dispatch] = useContext(ContextProduct)

    const skuColor = state?.colors?.find(color => color.props[0] === state?.selectedSku.props[0])
    console.log(sku)
    return (
        <div className='p-6 bg-white mt-6'>
            <h3 className='text-gray-500 font-medium text-xl'>Color: { }</h3>
            <div className='flex gap-6'>
                {
                    state?.colors?.map(product => <Product product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;