import { BsLinkedin } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';

import './footer.css';
const Footer = () => {
  return (
    <footer>
      <a href='#footer' className='footer__logo'>
        POLYMATH
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        {/* <li>
          <a href='#testimonials'>Testimonials</a>
        </li> */}
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/olarinde-alli-892747178'
          target='__blank'
        >
          <BsLinkedin />
        </a>
        <a href='https://x.com/AlliOlarinde' target='__blank'>
          <IoLogoTwitter />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; PolymathTech. All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
