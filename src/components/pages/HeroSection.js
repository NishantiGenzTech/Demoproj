import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import '../Styles/HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/🇦🇺 FARMING IN AUSTRALIA - Seeding - Sugar Cane Harvest - Kelly Diamond Harrow - Caterpillar, etc ....mkv' autoPlay loop muted />
      <p>THE BEST AGRICULTURE PRODUCTS</p>
      <h1>WELCOME TO AGRICULTURE FORM</h1>
     
      <div className='hero-btns'>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         Discover MoreR <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
