import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar flex justify-around pt-5 pb-5 items-center border-b border-violet-600">
                <Link to={"/"}><h1 className='text-3xl font-bold font-serif text-white uppercase hover:text-violet-400 transition delay-100'>Ryan.</h1></Link>
                <ul className='flex gap-10 text-gray-200 font-semibold text-lg'>
                  <li className='font-serif hover:text-violet-300 hover:scale-105 hover:bg-gray-800 rounded-2xl p-2 transition delay-100 ease-in-out cursor-pointer'>About me</li>
                  <li className='font-serif hover:text-violet-300 hover:scale-105 hover:bg-gray-800 rounded-2xl p-2 transition delay-100 ease-in-out cursor-pointer'><Link to={"/Projects"}> Projects</Link></li>
                  <li className='font-serif hover:text-violet-300 hover:scale-105 hover:bg-gray-800 rounded-2xl p-2 transition delay-100 ease-in-out cursor-pointer'><Link to={"/form"} >Contact</Link></li>
                </ul>
              </div>

    );


}


export default Navbar;
