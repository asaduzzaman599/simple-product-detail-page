import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import ProductSize from './ProductSize';

const ProductSizes = ({ state }) => {

    const [isTabOpen, setIsTabOpen] = useState(true)

    const skuSize = state?.sizes?.find(size => size?.id === state?.selectedSku?.props[1])

    return (
        <div className='px-4 py-2 bg-white mt-6'>

            <div className='flex items-center justify-between'>
                <h3 className='text-gray-500 font-medium text-xl'>Size: <span className='text-black'> {skuSize?.name}</span></h3>
                {isTabOpen
                    ? <ChevronUpIcon onClick={() => setIsTabOpen(false)} className="h-5 w-5 text-gray-500" />
                    : <ChevronDownIcon onClick={() => setIsTabOpen(true)} className="h-5 w-5 text-gray-500" />}
            </div>

            <div className={`grid grid-cols-5 gap-4 mt-4 ${isTabOpen ? 'block' : 'hidden'}`}>
                {
                    state?.sizes?.map(size => <ProductSize key={size.id} size={size} />)
                }
            </div>
        </div>
    );
};

export default ProductSizes;