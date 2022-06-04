import React, { useContext } from 'react';
import { ContextProduct } from '../../ReducerAndContext/ProductContext';

const ProductColor = ({ color }) => {

    const [state, dispatch] = useContext(ContextProduct)
    const selectedSkuColor = state?.selectedSku?.props[0];
    const productColor = color?.id

    return (
        <div
            onClick={() => dispatch({ type: 'color', payload: productColor })}
            className={`p-2 border-2  cursor-pointer hover:shadow-lg w-16
        ${selectedSkuColor === color?.id
                    ? 'border-orange-200 '
                    : 'border-gray-200'}`} >

            <img src={color?.image} alt="" className='w-full' />

        </div>
    );
};

export default ProductColor;