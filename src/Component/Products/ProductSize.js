import React, { useContext } from 'react';
import { ContextProduct } from '../../ReducerAndContext/ProductContext';

const ProductSize = ({ product }) => {
    const [state, dispatch] = useContext(ContextProduct)
    const size = state?.selectedSku?.props[1];
    const productSize = product?.id
    console.log(productSize)
    return (
        <div onClick={() => dispatch({ type: 'size', payload: productSize })} className={`p-2 rounded border-2  cursor-pointer hover:shadow-lg ${size === product?.id ? 'border-orange-200 bg-orange-50 ' : 'border-gray-200'}`} >
            <p>{product?.name}</p>
        </div>
    );
};

export default ProductSize;