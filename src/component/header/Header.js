import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
        <div className='flex items-center bg-slate-100 p-4 w-full justify-between'>
            <div>
            <h2 className='text-3xl font-bold text-purple-500'>pograming quiz</h2>
            </div>
        <nav className='text-red-500 text-1xl mr-4 '>
                <Link to='/'></Link>
                <Link className='mr-4 hover:bg-sky-700 p-3 hover:text-white' to='/home'>Home</Link>
                <Link className='mr-4 hover:bg-sky-700 p-3 hover:text-white' to='/satistics'>Satistics</Link>
                <Link className='mr-4 hover:bg-sky-700 p-3 hover:text-white' to='/blog'>Blog</Link>
                

            </nav>
        </div>
    );
};

export default Header;