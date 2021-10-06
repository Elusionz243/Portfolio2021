import React from 'react';

import selfPortrait from '../images/portrait-cropped.jpg';

import './about.css';

export default function About() {

  return (
    <div className='about-bg'>
      <div className='about-portrait'>
        <img src={selfPortrait} alt='Self Portrait' className='card-img self-portrait' />
      </div>
      <h3 className='section-title'>About Me</h3> 
      <div>
        <article className='white-font'>
          <div className='about-me-text'>
            <p>I've been passionate about the web since I was little.
              While I was growing up, I would search the web for all types of things, from Rubik's
              Cube tutorials, video game walkthroughs and information, and so much more. I've been
              living on the web for most of my life, and as time went by, the web inspired me to start programming.
            </p>
            <p>
              I've been programming for a little over twelve years now, and I've spent most of that time programming in
              Java.
              I learned Java to be able to program games and mod a game called <a
                href='https://www.minecraft.net/en-us/' style={{ textDecoration: 'none', color: 'lime' }}>Minecraft</a>.
              I spent around six and a half years working with a many different teams of programmers, to help create
              and configure Minecraft servers. I've always enjoyed working on a team, and am excited for all
              the teams I'm going to meet in the future.
            </p>
            <p>Coding hasn't always been my passion though. In fact, I have learned many
              different skills that have nothing
              to do with coding. Some of these skills include skateboarding, origami, speed cubing, machinic work,
              plumbing,
              and construction. I'm achieved the rank of Eagle Scout in the <a href='https://www.scouting.org/' style={{ textDecoration: 'none', color: 'gold' }}>Boy
                Scounts of America</a>.
              I've also learned a couple of different instruments, such as the acoustic and electric guitar, piano,
              ukulele, ocarina,
              and a couple more. I've always enjoyed learning new things, and will never stop.</p>
          </div>
          <h5> Here's a list of services I can provide</h5>
          <div className='services'>
            <ul className='service-list'>
              <li className='card service'>Website Development with React, HTML, CSS, and Javascript</li>
              <li className='card service'>Minecraft server development and management</li>
              <li className='card service'>Bukkit/Spigot plugin development</li>
              <li className='card service'>Phone, console, and PC repairs</li>
              <li className='card service'>Twitch.tv channel management and overlay/emote design</li>
              <li className='card service'>Visual Studios Code theme creator</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  )
}