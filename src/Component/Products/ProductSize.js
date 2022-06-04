import React, { useContext } from 'react';
import { ContextProduct } from '../../ReducerAndContext/ProductContext';

const ProductSize = ({ size }) => {
    const [state, dispatch] = useContext(ContextProduct)
    const selectedSkuSize = state?.selectedSku?.props[1];
    const productSize = size?.id
    return (
        <div
            onClick={() => dispatch({ type: 'size', payload: productSize })}
            className={`p-2 rounded border-2  cursor-pointer hover:shadow-lg 
        ${selectedSkuSize === size?.id
                    ? 'border-orange-200 bg-orange-50 '
                    : 'border-gray-200'}`} >

            <p>{size?.name}</p>

        </div>
    );
};

export default ProductSize;