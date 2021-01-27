import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const {click, setClick} = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);
  
    return (
       <>
         <nav className='navbar'>
           <Link to='/' className='navbar-logo'>
             <img src={ logo } alt='logo' className='logo'></img>
           </Link>
           <div className='menu-icon' onclick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
           </div>
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
             <li className='nav-item'>
               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                 Home
               </Link>
             </li>
             <li className='nav-item'>
               <Link to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>
                 About us
               </Link>
             </li>
             <li className='nav-item'>
               <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                 Contact Us
               </Link>
             </li>
             <li className='nav-item'>
               <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                 Sign Up
               </Link>
             </li>
           </ul>
           <Button />
         </nav>
       </>
    )
}

export default Navbar
