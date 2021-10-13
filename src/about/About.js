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
            <p>I've been passionate about the web since I was young.
              Growing up I would scour the web to learn about solving Rubik’s cubes, puzzles in video games,
              and much more.
              I've been living on the web for most of my life, and as time went by, the web inspired me to start programming.
            </p>
            <p>
              I found my passion for programming at the age of twelve, when I started learning Java.
              I studied Java in order to program my own games and mod a game called <a
                href='https://www.minecraft.net/en-us/' style={{ textDecoration: 'none', color: 'lime' }}>Minecraft</a>.
              I worked with many different teams of developers,
              creating mods and configuration for a variety of Minecraft servers.
              I've always enjoyed working on a team, and am excited for all
              the teams I'm going to meet in the future.
            </p>
            <p>Coding hasn't always been my passion though. In fact, I have learned many
              different skills that have nothing
              to do with coding. Such as skateboarding, origami, speed cubing, guitar,
              and piano.
              I achieved the rank of Eagle Scout in the <a href='https://www.scouting.org/' style={{ textDecoration: 'none', color: 'gold' }}>Boy
                Scounts of America</a> in 2016.
              I've always enjoyed learning new things, and will never stop.</p>
          </div>
          <h5> Here's a list of services I can provide:</h5>
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