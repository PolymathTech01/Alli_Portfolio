import { BiCheck } from 'react-icons/bi';
import './services.css';
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container flex justify-center items-center'>
        {/* END OF UI/UX */}
        <article className='service h-auto'>
          <div className='service__head'>
            <h3>Full Stack Web Development</h3>
          </div>
          <ul className='service__list'>
            <li className='pb-2'>
              <BiCheck className='service__list-icon' />
              <p>
                Building responsive websites and web applications that are
                optimized for various devices,ensuring seamless experience.
              </p>
            </li>
            <li className='pb-2'>
              <BiCheck className='service__list-icon' />
              <p>Integration of third-party APIs and services</p>
            </li>
            <li className='pb-2'>
              <BiCheck className='service__list-icon' />
              <p>
                Optimizing website loading times to ensure smooth user
                experience.
              </p>
            </li>
            <li className='pb-2'>
              <BiCheck className='service__list-icon' />
              <p>
                Search Engine Optimization. Implementing SEO strategies to
                website and web applications to ensure good ranking on search
                engines
              </p>
            </li>
            <li className='pb-2'>
              <BiCheck className='service__list-icon' />
              <p>
                Building APIs with nodejs with Test Driven Development (TDD)
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web Developement */}
      </div>
    </section>
  );
};

export default Services;
