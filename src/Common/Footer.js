import React from 'react';

export default function Footer() {
  return (
    <div className='socials'>
      <ul className='social-medias socials-card'>
        <li className='social-media'>
          <a href='https://www.linkedin.com/in/jacobhickman12/' target='_blank' rel='noreferrer'>LinkedIn</a>
        </li>
        <li className='social-media'>
          <a href='https://www.github.com/Elusionz243/' target='_blank' rel='noreferrer'>Github</a>
        </li>
        <li className='social-media'>
          <button className='btn btn-link'
          >jacobhickman243@gmail.com
          </button>
        </li>
      </ul>
    </div>
  );
}