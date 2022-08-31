import React from 'react';
import './testimonials.css';
import AVATER1 from '../../Assets/rosh.jpeg';
import AVATER2 from '../../Assets/Yusuf.jpeg';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    avater: AVATER1,
    name: 'Rosh Ajao',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui enim adipisci ullam facere minima, expedita velit facilis officia eligendi asperiores consequatur, harum quo ipsam fugit. Nostrum cupiditate quasi laborum. Quo!',
  },
  {
    avater: AVATER1,
    name: 'Rosh Ajao',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui enim adipisci ullam facere minima, expedita velit facilis officia eligendi asperiores consequatur, harum quo ipsam fugit. Nostrum cupiditate quasi laborum. Quo!',
  },
  {
    avater: AVATER1,
    name: 'Rosh Ajao',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui enim adipisci ullam facere minima, expedita velit facilis officia eligendi asperiores consequatur, harum quo ipsam fugit. Nostrum cupiditate quasi laborum. Quo!',
  },
  {
    avater: AVATER2,
    name: 'AbdulRahmam Yusuf',
    review:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui enim adipisci ullam facere minima, expedita velit facilis officia eligendi asperiores consequatur, harum quo ipsam fugit. Nostrum cupiditate quasi laborum. Quo!',
  },
];
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className='container testimonials__container'
      >
        {testimonials.map(({ avater, name, review }, index) => {
          return (
            <SwiperSlide className='testimonial' key={index}>
              <div className='client__avatar'>
                <img src={avater} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
