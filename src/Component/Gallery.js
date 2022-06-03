import React, { useContext } from 'react';
import { ContextProduct } from '../ReducerAndContext/ProductContext';

const Gallery = ({ state }) => {

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 flex-1'>
            {
                state?.gallery?.map((photo, index) => <div key={index}>
                    <img src={photo.url} alt='product gallery item' className='h-full'></img>
                </div>)
            }
        </div>
    );
};

export default Gallery;