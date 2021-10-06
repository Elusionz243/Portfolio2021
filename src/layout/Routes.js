import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../about/About';

// import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Navbar from '../Common/Navbar';
import Contact from '../contact/Contact';
import Notfound from '../errors/Notfound';
import HomePage from '../home/HomePage';
import Projects from '../projects/Projects';

export default function Routes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact={true}>
          <HomePage />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route>
          <Notfound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
