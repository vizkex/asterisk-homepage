// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import Pwoer from '../components/Pwoer';
import '../index.css'



const Home: React.FC = () => {
  return (
    <div className='maindiv'>
      <Header />
      <div  className='homemain'>
      <main>
      <h1>Home</h1>
      <Pwoer />
      </main>
      </div>
    </div>
  );
};

export default Home;
