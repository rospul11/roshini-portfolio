import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <header className='header'>
        <div className="navbar bg-base-100  text-white" style={{ backgroundColor: '#1B1C1E' }}>
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl hover:bg-slate-300  rounded-lg transition ease-in-out duration-300">
              Roshini Pulle
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
