import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/crown.svg';
import './Header_94.scss';

const Header_94 = () => {
  return (
    <div>
      <div className='header'>
        <Link to='/' className='logo-container'>
          <Logo />
        </Link>
        <div className='options'>
          <Link to='/shop_94' className='option'>
            Shop
          </Link>
          <Link to='/contact_94' className='option'>
            Contact
          </Link>
          <Link to='/signin_94' className='option'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header_94;
