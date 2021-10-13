import React from 'react';

import './projects.css';
import localLibraryPic from '../images/local-library.jpg';
import decoderRingPic from '../images/decoder-ring.jpg';
import pomodoroPic from '../images/pomodoro.jpg';
import redstonePic from '../images/redstone_ore.png';

export default function Projects() {

  return (
    <div className='projects-bg'>
      <div className='project-title'>
        <h3>Jacob's Projects</h3>
      </div>
      <article className='container'>
        <ul className='project-list'>
          <li className='card project-card'>
            <div className='card-title project-card-title'>
              <h5><strong>Local Library</strong></h5>
            </div>
            <div className='card-img project-card-img'>
              <img src={localLibraryPic} alt='Local Library' className='img-thumbnail' />
            </div>
            <div className='card-body project-card-body'>
              <p>The local library, is a project that I took on from 
                <a href='https://www.thinkful.com/' target='_blank' style={{textDecoration: 'none'}} rel='noreferrer'> Thinkful</a>.
                This project allows administrators to look and manage a list of library accounts, shows a list of the
                most popular authors and books, and see a list of books that are borrowed or at the library.</p>
            </div>
            <div className='card-footer project-card-footer'>
              <a href='https://elusionz243.github.io/project-local-library/' className='btn btn-primary'
                target='_blank' rel='noreferrer'>Live Preview</a>
              <a href='https://github.com/Elusionz243/project-local-library/tree/master' className='btn btn-primary'
                target='_blank' rel='noreferrer'>Source Code</a>
            </div>
          </li>
          <li className='card project-card'>
            <div className='card-title project-card-title'>
              <h5><strong>Decoder Ring</strong></h5>
            </div>
            <div className='card-img'>
              <img src={decoderRingPic} alt='Decoder Ring' className='img-thumbnail' />
            </div>
            <div className='card-body project-card-body'>
              <p>The Decoder Ring, was a project I took on to practice using algorithms to encode and decode messages.
                This was a really fun project, and took me a while to complete. The live view allows you to encode and
                decode you're own messages!</p>
            </div>
            <div className='card-footer project-card-footer'>
              <a href='https://elusionz243.github.io/Project_Decoder_Ring_1/' className='btn btn-primary'
                target='_blank' rel='noreferrer'>Live Preview</a>
              <a 
              href='https://github.com/Elusionz243/Project_Decoder_Ring_1' className='btn btn-primary' 
              target='_blank' rel='noreferrer'>Source Code</a>
            </div>
          </li>
          <li className='card project-card'>
            <div className='card-title project-card-title'>
              <h5><strong>Pomodoro Timer</strong></h5>
            </div>
            <div className='card-img'>
              <img src={pomodoroPic} alt='Pomodoro Timer' className='img-thumbnail' />
            </div>
            <div className='card-body project-card-body'>
              <p>The Pomodoro Timer, is a timer to create sessions to focus on a task with break intervals.
                The timer has two settings, a focus timer, and a break duration timer. During the focus phase
                the time will count down from the selected time. When the focus phase timer hits zero, the break
                phase begins. The timer will continue switching between the two phases until you are finished with
                your task.</p>
            </div>
            <div className='card-footer project-card-footer'>
              <a href='https://pomodoro-timer-ashy.vercel.app/' className='btn btn-primary' target='_blank' rel='noreferrer'>Live
                Preview</a>
              <a href='https://github.com/Elusionz243/Pomodoro-Timer' className='btn btn-primary' target='_blank' rel='noreferrer'>Source
                Code</a>
            </div>
          </li>
          <li className='card project-card'>
            <div className='card-title project-card-title'>
              <h5><strong>Redstone Database</strong></h5>
            </div>
            <div className='project-card-img'>
              <img src={redstonePic} alt='Redstone Ore' className='img-thumbnail redstone-image'/>
            </div>
            <div className='card-body project-card-body'>
              <p>A website in the making focused on helping Minecraft players who are interested in learning the mechanics of Redstone.
                Content to expect: Redstone Tutorials, Redstone Contraptions, and Leveled Redstone Guides. 
              </p>
            </div>
            <div className='card-footer project-card-footer'>
              <a href='https://www.google.com' className='btn btn-danger disabled' aria-disabled>TBD</a>
              <a href='https://www.google.com' className='btn btn-danger disabled' aria-disabled>TBD</a>
            </div>
          </li>
        </ul>
      </article> 
    </div>
  );
}