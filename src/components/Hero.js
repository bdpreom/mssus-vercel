import React from 'react';
import { Container } from 'react-bootstrap';
import HeroImage from '../assets/hero_image.png';

function Hero() {
  return (
    <Container
      style={{
        border: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          paddingTop: '100px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            fontSize: '60px',
            lineHeight: '72px',
            color: 'white',
            fontWeight: '800',
            width: '500px',
          }}
        >
          Conference on women's role in union parishad election
        </div>
        <div>
          <img src={HeroImage} alt='hero' />
        </div>
      </div>
    </Container>
  );
}

export default Hero;
