import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className='pack-1'>
            <div className='loggo'>
                <div className='logo'>
                    Doc Time!
                </div>
                <div className='caption'>
                    don't wait anymore...!
                </div>
            </div>

            <div className='options'>
                <Link to=''>Home</Link>
                <Link to=''>Contact Us</Link>
                <Link to=''>About</Link>
            </div>
            </div>
            <button className='profile'>
                <i className="fa-regular fa-user"></i>
            </button>


        </nav>
    )
}

export default Navbar