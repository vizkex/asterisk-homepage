import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <header className='mainheader'>
      <h1>Astersik<span>*</span></h1>
      <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default About;