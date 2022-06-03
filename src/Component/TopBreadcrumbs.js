import React from 'react';

const TopBreadcrumbs = () => {
    return (
        <div className='lg:flex mb-2'>
            <div className=' w-full lg:w-2/5 bg-[#F1DC41] p-2'>
                <p className='font-semibold'>Related Categories</p>
            </div>
            <div className='p-2'>
                <nav className="flex" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <span className="cursor-pointer ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Home</span>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>

                                <span className="cursor-pointer ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Footwear</span>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <span className="cursor-pointer ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Sports</span>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <span className="cursor-pointer ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Sneakers</span>
                            </div>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default TopBreadcrumbs;