import React from 'react';
import errorApp from '../assets/App-Error.png'
import { NavLink } from 'react-router';

const ErrorApp = () => {
    return (
            <div className='text-center py-20 bg-[#f5f5f5] space-y-5 mx-auto '>
                <img className='mx-auto' src={errorApp} alt="" />
                <h1 className='font-bold text-5xl'>OPPS!! APP NOT FOUND</h1>
                <p> The App you are requesting is not found on our system.  please try another apps</p>
                {/* <NavLink to='/apps' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md px-8" href='/apps'> Go Back! </NavLink> */}
                <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md px-8" href='/apps'> Go Back!</a>
                
            </div>
        );
};

export default ErrorApp;