
import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul 
        style={{
          display: 'flex',
          gap: '40px',
          textDecoration: 'none',
          color: 'black',
        }}
      >
        <li><a className='custom-a' href="#about-us">About Us</a></li>
        <li><a className='custom-a' href="#legal-status">Legal Status</a></li>
        <li><a className='custom-a' href="#our-governance">Our Governance</a></li>
        <li><a className='custom-a' href="#our-activity">Our Activity</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;