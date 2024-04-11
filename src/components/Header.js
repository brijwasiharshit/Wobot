import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-gray-700 text-white p-4'>
      <div className='flex items-center mb-4 md:mb-0'>
        <div>
        <Link to = '/'><p className="text-4xl md:text-5xl mr-4">👨‍🍳</p></Link>
        </div>
        <h2 className='text-xl md:text-2xl font-semibold'>Harshit's Recipe</h2>
      </div>
      <ul className='flex gap-6 text-sm md:text-lg'>
      <Link to = '/'><li>Home</li></Link>
       <Link to = '/about'><li>About</li></Link> 
        <Link to = '/contact'><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Header;
