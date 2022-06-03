import React from 'react';

const PriceSection = ({ state }) => {

    const discountedPrice = state?.selectedSku?.price?.discounted || 0
    const oldPrice = state?.selectedSku?.price?.old || 0
    return (
        <div className='px-6 py-2 bg-white mt-6'>
            <h3 className='font-bold text-xl'>Price: <span className='text-2xl ml-6'> Rs. {parseFloat(discountedPrice.toFixed(2))}</span> <span className='line-through text-gray-500 mx-6'>Rs. {parseFloat(oldPrice.toFixed(2))} </span>  <span className='text-[#e7b66a]'>({Math.round(100 - (100 / oldPrice * discountedPrice))}% OFF)</span></h3>
        </div>
    );
};

export default PriceSection;