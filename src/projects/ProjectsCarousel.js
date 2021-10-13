import React from 'react';
import Carousel, { arrowsPlugin, autoplayPlugin } from '@brainhubeu/react-carousel';
import Icon from 'react-fa';

import localLibraryPic from '../images/local-library.jpg';
import decoderRingPic from '../images/decoder-ring.jpg';
import pomodoroPic from '../images/pomodoro.jpg';
import redstonePic from '../images/redstone_ore.png';

import './projects.css';
import '@brainhubeu/react-carousel/lib/style.css';

export default function ProjectsCarousel() {

  return (
    <div className='projects-bg' style={{padding: '3% 10%'}}>
      <Carousel plugins={['infinite',
        {
          resolve: autoplayPlugin,
          options: {
            interval: 2000
          }
        },
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: <button className='btn btn-primary carousel-buttons'><Icon name="angle-double-left" /></button>,
            // arrowLeftDisabled: <button><Icon name="angle-left" /></button>,
            arrowRight: <button className='btn btn-primary carousel-buttons'><Icon name="angle-double-right" /></button>,
            // arrowRightDisabled: <button><Icon name="angle-right" /></button>,
            addArrowClickHandler: true,
          }
        }]}
        animationSpeed={1000}>
        <div>
          <img src={localLibraryPic} alt='Local Library' className='project-img' />
        </div>
        <div>
          <img src={decoderRingPic} alt='Decoder Ring' className='project-img' />
        </div>
        <div>
          <img src={pomodoroPic} alt='Pomodoro Timer' className='project-img' />
        </div>
        <div>
          <img src={redstonePic} alt='Redstone' className='project-img' />
        </div>
      </Carousel>
    </div>
  );
}