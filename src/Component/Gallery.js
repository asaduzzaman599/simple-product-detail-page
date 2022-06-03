import React, { useContext } from 'react';
import { ContextProduct } from '../ReducerAndContext/ProductContext';

const Gallery = () => {
    const [state] = useContext(ContextProduct)
    console.log(state)
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 flex-1'>
            {
                state?.gallery?.map((photo, index) => <img key={index} src={photo.url} alt='gallery photo' className='h-full'></img>)
            }
        </div>
    );
};

export default Gallery;