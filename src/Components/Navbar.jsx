import React from 'react';
import Logo from '../assets/logo.png';

import { NavLink } from 'react-router';
import { Github } from 'lucide-react';

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'Installation', path: '/installation' },
  ];

  return (
    <div className="navbar bg-base-100 mx-auto md:w-11/12">
      <div className="navbar-start">
        <NavLink to="/" className="flex items-center gap-2">
          <img className="w-[40px] h-[40px]" src={Logo} alt="" />
          <h2 className="font-bold">HERO.IO</h2>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative text-[16px] font-medium transition-all duration-300 
                   ${isActive
                     ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:rounded-full'
                     : 'text-gray-700'}`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">

        <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md" href='https://github.com/Israt-Jahan-Asma'><Github /> Contribute</a>
      </div>
    </div>
  );
};

export default Navbar;
