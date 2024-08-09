import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/olarinde-alli-892747178'
        target='__blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/PolymathTech01' target='__blank'>
        <FaGithub />
      </a>
      <a href='https://x.com/AlliOlarinde'>
        <IoLogoTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
