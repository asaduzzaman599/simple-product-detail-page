import ProductColor from './ProductColor';

const ProductColors = ({ state }) => {


    const skuColor = state?.colors?.find(color => color?.id === state?.selectedSku?.props[0])

    return (
        <div className='py-2 px-4 bg-white mt-6'>
            <h3 className='text-gray-500 font-medium text-xl'>Color: <span className='text-black'> {skuColor?.name}</span></h3>

            <div className='flex flex-wrap gap-6 mt-4'>
                {
                    state?.colors?.map(color => <ProductColor key={color.id} color={color} />)
                }
            </div>
        </div>
    );
};

export default ProductColors;