import React from 'react';
import playLogo from '../assets/Group.png'
import appLogo from '../assets/fi_5977575.png'
import bannerImg from '../assets/Component 1.png'
import { NavLink } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-[#f5f5f5] pt-20 text-center space-y-8'>
            <div>
                <h1 className='text-7xl  font-bold'>
                We Build <br /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive </span>Apps
            </h1>
            <p className='text-[#627382] font-light text-[20px] pt-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className="space-x-2">
                <NavLink to='https://play.google.com/store/games?hl=en' className="btn py-6 "> <img src={playLogo} alt="" />Google Play</NavLink>
                <NavLink to='https://www.apple.com/app-store/' className="btn  py-6  "> <img src={appLogo} alt="" />App Store</NavLink>
               
            </div>
            <img className='mx-auto' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;