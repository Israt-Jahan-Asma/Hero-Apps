import React from 'react';
import errorImg from '../assets/error-404.png'
import { NavLink } from 'react-router';

const Errorpage = () => {
    return (
        <div className='text-center py-20 bg-[#f5f5f5] space-y-5 mx-auto '>
            <img className='mx-auto' src={errorImg} alt="" />
            <h1 className='font-bold text-5xl'>Oops, page not found!</h1>
            <p> The page you are looking for is not available.</p>
            {/* <NavLink to='/apps' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md px-8" href='/apps'> Go Back! </NavLink> */}
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md px-8" href='/'> Go Back!</a>
            
        </div>
    );
};

export default Errorpage;