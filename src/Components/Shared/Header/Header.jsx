/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../Header/logo.svg';

const Header = () => {
    return (
        <div className='w-full max-w-[1400px] mx-auto pt-10'>
            <div className='flex items-center justify-between px-4 2xl:px-0'>
            <div className='flex items-center gap-2'>
                    <div className='mb-2 w-fit relative'>
                        <img className='h-12 mx-auto object-contain pt-2' src={logo} alt="navbar-logo" />
                    </div>
                    {/* <Link to="/" className='font-bold text-2xl text-black-100'>Bhojan Mitra</Link> */}
                    <p className='font-bold text-2xl text-black-100'></p>
                </div>

                <ul className={`sm:flex items-center flex-col absolute duration-700 justify-center font-popins sm:static sm:flex-row sm:justify-end sm:w-auto hidden`}>
                    {/* <li className='mr-3'>
                        <a className='text-black-100 font-light text-base' href={`#feature`}>Features</a>
                    </li>
                    <li className='mr-3'>
                        <a className='text-black-100 font-light text-base' href="#app">App Launch</a>
                    </li>
                    <li className='mr-3'>
                        <a className='text-black-100 font-light text-base' href="#aashram">Campaign</a>
                    </li> */}
                    <li className='mr-3'>
                        {/* <Link to={'privacy-policy'} className='text-black-100 font-light text-base'>Privacy</Link> */}
                        <p className='text-black-100 font-light text-base'>Login/Register</p>
                    </li>
                    <li className=''>
                        <button className='bg-violet-950 text-white w-[140px] rounded h-8'>Become a Coach</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;