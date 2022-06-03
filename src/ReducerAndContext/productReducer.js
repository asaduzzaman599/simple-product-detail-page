const initialState = { product: null, sku: null };

function productReducer(state, action) {
    switch (action.type) {
        case 'load':

            return;
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default productReducer