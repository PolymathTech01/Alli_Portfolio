import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Alli from '../../Assets/alli2.jpg';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Alli} alt='me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Companies</h5>
              <small>2+ companies</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I'm a passionate Full Stack Web Developer with 2 years of
            experience, having had the opportunity to work with brilliant minds
            in the tech industry. I thrive on learning new technologies and
            sharing knowledge, which fuels my enthusiasm for both individual and
            team growth. My ability to adapt quickly to new and productive
            environments, combined with my attention to detail, ensures that I
            deliver high-quality, innovative solutions consistently. I enjoy
            being a collaborative team player and am always ready to take on new
            challenges.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
