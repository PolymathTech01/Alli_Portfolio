import './portfolio.css';
import rethink from '../../Assets/rethink.png';
import crownClothing from '../../Assets/crownClothing.png';
const data = [
  {
    id: 0,
    image: crownClothing,
    title: 'Crown Clothing, a mini e-commerce website',
    github: 'https://github.com/PolymathTech01/CrownClothingProject',
    demo: 'https://comforting-chebakia-ab2594.netlify.app/',
  },
  {
    id: 1,
    image: rethink,
    title: 'Rethink website',
    github: 'https://github.com/PolymathTech01/retinkAssesment',
    demo: 'https://retinkassessment.netlify.app/',
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
