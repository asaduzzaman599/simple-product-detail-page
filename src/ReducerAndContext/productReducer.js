export const initialState = {
    productInfo: null,
    gallery: [],
    skus: [],
    colors: [],
    sizes: [],
    selectedSku: null,
    title: ''
};

const productReducer = (state, action) => {
    let sku;
    switch (action.type) {
        case 'load':
            const product = action?.payload
            return {
                productInfo: product,
                gallery: product?.gallery,
                skus: product?.variation?.skus,
                colors: product?.variation?.props[0]?.values,
                sizes: product?.variation?.props[1]?.values,
                selectedSku: product?.variation?.skus[0],
                title: product?.title
            }
        case 'color':
            //checking selected color and update the selected sku
            const color = action?.payload
            sku = state.skus.find(singleSku => singleSku.props[0] === color && singleSku.props[1] === state.selectedSku.props[1])
            return { ...state, selectedSku: sku };

        case 'size':
            const size = action?.payload
            sku = state.skus.find(singleSku => singleSku.props[1] === size && singleSku.props[0] === state.selectedSku.props[0])
            return { ...state, selectedSku: sku };
        default:
            throw new Error();
    }
}

export default productReducer