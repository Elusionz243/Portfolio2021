import React from 'react';
import selfPortrait from '../images/portrait-cropped.jpg';
import './homepage.css';

export default function HomePage() {

  return (
    <div className='hp-bg'>
      <div className='hp'>
        <div className='card hp-card'>
          <div className="portrait">
            <img src={selfPortrait} alt='Self Portrait' className='card-img' />
          </div>
          <div className='card-body introduction'>
            <p style={{ color: 'white' }}>
              Hi! My name is Jacob Hickman, I've been a professional programmer for 5 years, specializing in backend development.
              I graduated from <a href="https://thinkful.com/" className='intro-links' target='_blank' rel='noreferrer'>Thinkful</a> in May 2021,
              where I learned the majority of my web development skills. I'm currently a freelance web developer residing
              in <a href='https://goo.gl/maps/tcZyJZZWkiJvMaC97' className='intro-links' target='_blank' rel='noreferrer'>San Antonio, Texas</a>.
            </p>
          </div>
        </div>
      </div> 
    </div>
  )
}
