import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <div className="navbar bg-base-100 bg- opacity-75 text-white" style={{ backgroundColor: 'none' }}>
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl hover:bg-slate-300  rounded-lg transition ease-in-out duration-300">
              Roshini Pulle
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className='hover:bg-slate-300 rounded-lg transition duration-300 ease-in-out'>
                <Link to="/about">About Me</Link>
              </li>
              <li className='hover:bg-slate-300 rounded-lg transition duration-300 ease-in-out'>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className='hover:bg-slate-300 rounded-lg transition duration-300 ease-in-out'>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
