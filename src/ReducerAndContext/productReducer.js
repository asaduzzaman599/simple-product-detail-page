export const initialState = { gallery: [], product: null, sku: null };

const productReducer = (state, action) => {
    switch (action.type) {
        case 'load':
            console.log(action.payload)
            return { product: action.payload }
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default productReducer