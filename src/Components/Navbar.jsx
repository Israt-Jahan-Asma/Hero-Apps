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

  const activeStyle =
    'text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2] after:rounded-full';

  return (
    <div className="navbar bg-base-100 mx-auto md:w-11/12">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-[16px] font-medium transition-all duration-300 ${
                      isActive
                        ? activeStyle
                        : 'text-gray-700 hover:text-[#632EE3]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img className="w-[40px] h-[40px]" src={Logo} alt="" />
          <h2 className="font-bold">HERO.IO</h2>
        </NavLink>
      </div>

      {/* Navbar Center (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative text-[16px] font-medium transition-all duration-300 ${
                    isActive
                      ? activeStyle
                      : 'text-gray-700 hover:text-[#632EE3]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <a
          href="https://github.com/Israt-Jahan-Asma"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md"
        >
          <Github className="w-4 h-4" /> Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
