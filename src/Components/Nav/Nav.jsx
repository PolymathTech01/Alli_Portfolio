import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BsChatRightText } from 'react-icons/bs';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './nav.css';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <Tippy content='Home'>
        <a
          href='#home'
          onClick={() => setActiveNav('#')}
          className={activeNav === '#' ? 'active' : ''}
        >
          <AiOutlineHome />
        </a>
      </Tippy>
      <Tippy content='About Me'>
        <a
          href='#about'
          onClick={() => setActiveNav('#about')}
          className={activeNav === '#about' ? 'active' : ''}
        >
          <AiOutlineUser />
        </a>
      </Tippy>
      <Tippy content='My Experience'>
        <a
          href='#experience'
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}
        >
          <BiBook />
        </a>
      </Tippy>
      <Tippy content='My Services'>
        <a
          href='#services'
          onClick={() => setActiveNav('#services')}
          className={activeNav === '#services' ? 'active' : ''}
        >
          <RiServiceLine />
        </a>
      </Tippy>
      <Tippy content='Testimonials'>
        <a
          href='#testimonials'
          onClick={() => setActiveNav('#testimonials')}
          className={activeNav === '#testimonials' ? 'active' : ''}
        >
          <BsChatRightText />
        </a>
      </Tippy>
      <Tippy content='Contact Me'>
        <a
          href='#contact'
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}
        >
          <BiMessageSquareDetail />
        </a>
      </Tippy>
    </nav>
  );
};

export default Nav;
