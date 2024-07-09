import React from 'react';
import Navbar from './Navbar';
import Logo from '../assets/MSSUS_Logo.png';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Container
      style={{
        border: 'none',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'white',
          padding: '5px',
          height: '88px',
          borderBottomLeftRadius: '10px',
          borderBottomRightRadius: '10px',
        }}
      >
        <div
          style={{
            paddingLeft: '50px',
          }}
        >
          <img src={Logo} alt='logo' />
        </div>
        <Navbar />
        <div
          style={{
            paddingRight: '50px',
          }}
        >
          <FontAwesomeIcon icon={faBars} size='lg' />
        </div>
      </header>

    </Container>
  );
}

export default Header;
