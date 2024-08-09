import React from 'react';
import MYCV from '../../Assets/My_Resume.pdf';
const CTA = () => {
  return (
    <div className='cta'>
      <a href={MYCV} download className='btn' target='__blank'>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
