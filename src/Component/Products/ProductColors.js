import ProductColor from './ProductColor';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { useState } from 'react';
const ProductColors = ({ state }) => {

    const [isTabOpen, setIsTabOpen] = useState(true)


    const skuColor = state?.colors?.find(color => color?.id === state?.selectedSku?.props[0])

    return (
        <div className='py-2 px-4 bg-white mt-6'>
            <div className='flex items-center justify-between'>
                <h3 className='text-gray-500 font-medium text-xl'>Color: <span className='text-black'> {skuColor?.title}</span> </h3>
                {isTabOpen
                    ? <ChevronUpIcon onClick={() => setIsTabOpen(false)} className="h-5 w-5 text-gray-500" />
                    : <ChevronDownIcon onClick={() => setIsTabOpen(true)} className="h-5 w-5 text-gray-500" />}
            </div>

            <div className={`flex flex-wrap gap-6 mt-4 ${isTabOpen ? 'block' : 'hidden'}`}>
                {
                    state?.colors?.map(color => <ProductColor key={color.id} color={color} />)
                }
            </div>
        </div>
    );
};

export default ProductColors;