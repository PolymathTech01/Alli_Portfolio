import './portfolio.css';
import IMG1 from '../../Assets/portfolio1.jpg';
import IMG2 from '../../Assets/portfolio2.jpg';
import IMG3 from '../../Assets/portfolio3.jpg';
import IMG4 from '../../Assets/portfolio4.jpg';
import IMG5 from '../../Assets/portfolio5.png';
import IMG6 from '../../Assets/portfolio6.jpg';
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https:link',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https:link',
  },
  {
    id: 2,
    image: IMG3,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https:link',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https:link',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https:link',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard',
    github: 'https://github.com',
    demo: 'https:link',
  },
];
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className='portfolio__item' key={id}>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='__blank'>
                  Github
                </a>
                <a href={demo} className='btn btn-primary' target='__blank'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
