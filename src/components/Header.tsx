import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

const About: React.FC = () => {
  return (
    <header className='mainheader'>
      <h1>Astersik<span>*</span></h1>
      <nav>
      <Link to="/">Home <Arrow /> </Link>
      <Link to="/about">About <Arrow /> </Link>
      <Link to="/pricing">Pricing <Arrow /> </Link>
      <Link to="/about">Showcase <Arrow /> </Link>
      </nav>
    </header>
  );
};

export default About;