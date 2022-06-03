import React, { useReducer } from 'react';
import productReducer, { initialState } from './productReducer';

export const ContextProduct = React.createContext()

const ProductContext = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);
    console.log(dispatch)
    return (
        <ContextProduct.Provider value={[state, dispatch]}>
            {children}
        </ContextProduct.Provider>
    );
};

export default ProductContext;