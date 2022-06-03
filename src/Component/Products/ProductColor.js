import React, { useContext } from 'react';
import { ContextProduct } from '../../ReducerAndContext/ProductContext';

const ProductColor = ({ product }) => {

    const [state, dispatch] = useContext(ContextProduct)
    const color = state?.selectedSku?.props[0];
    const productColor = product?.id
    console.log(product)

    return (
        <div onClick={() => dispatch({ type: 'color', payload: productColor })} className={`p-4 border-2  cursor-pointer hover:shadow-lg ${color === product?.id ? 'border-orange-200 ' : 'border-gray-200'}`} >
            <img src={product?.thumb} alt="" />
        </div>
    );
};

export default ProductColor;