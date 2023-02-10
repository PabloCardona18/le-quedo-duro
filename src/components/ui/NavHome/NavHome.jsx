import React from 'react'
import { Link } from 'react-router-dom';
import './NavHome.css';

export const NavHome = () => {
  return (
    <nav>
      <ul>
          <Link to='/'><li>Home</li></Link>
         <Link to='/aboutUS'><li>aboutUS</li></Link>
          <Link to='/contactUS'><li>contactUS</li></
          Link>
         
       </ul>
  </nav>
  )
}

