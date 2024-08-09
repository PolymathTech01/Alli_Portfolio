import React from 'react';
import './header.css';
import CTA from './CTA';
import Alli from '../../Assets/alli.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Alli Olarinde</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={Alli} alt='myself' className='bg-transparent' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
