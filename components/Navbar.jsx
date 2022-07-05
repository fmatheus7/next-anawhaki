import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineStar, AiOutlineClose } from "react-icons/ai";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex='0' className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </label>
            <ul
              tabIndex='0'
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='navbar-center'>
          <a className='btn btn-ghost normal-case text-xl'>Anawhaki</a>
        </div>
        <div className='navbar-end'>
          <ul className='hidden sm:flex items-center justify-between space-x-3'>
            <Link href='/retreats'>
              <li className='cursor-pointer'>Retreats</li>
            </Link>
            <Link href='/Events'>
              <li className='cursor-pointer'>Events</li>
            </Link>
            <Link href='/Cerimonies'>
              <li className='cursor-pointer'>Cerimonies</li>
            </Link>
            <Link href='/Medicines'>
              <li className='cursor-pointer'>Medicines</li>
            </Link>
            <Link href='/serviços'>
              <li className='cursor-pointer'>Serviços</li>
            </Link>
            <Link href='/About'>
              <li className='cursor-pointer'>About us</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
