import React from 'react';

const States = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center space-y-10 py-20'>
            <h1 className='font-bold text-5xl text-white'>Trusted by Millions, Built for You</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-auto w-9/12'> 
                <div className='space-y-4'>
                    <p className='font-light text-white'>Total Downloads</p>
                    <h2 className='font-bold text-6xl text-white'>29.6M</h2>
                    <p className='font-light text-white'>21% more than last month</p>
                </div>
                <div className='space-y-4'>
                    <p className='font-light text-white'>Total Reviews</p>
                    <h2 className='font-bold text-6xl text-white'>2906K</h2>
                    <p className='font-light text-white'>46% more than last month</p>
                </div>
                <div className='space-y-4'>
                    <p className='font-light text-white'>Active Apps</p>
                    <h2 className='font-bold text-6xl text-white'>132+</h2>
                    <p className='font-light text-white'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default States;