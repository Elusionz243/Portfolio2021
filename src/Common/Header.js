import React from 'react';

import Navbar from './Navbar';

import './header.css';

/**
 * Header for all pages
 * @returns
 * JSX Header Element
 **/

export default function Header() {
  return (
    <div className='bg-dark'>
      <Navbar />
    </div>
  );  
}
