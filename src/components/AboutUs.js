import React from 'react';
import { Container } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container
      id='about-us'
      style={{
        border: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: '460px',
        }}
      >
        <div
          style={{
            height: 'inherit',
            width: '592px',
            border: '1px solid whitesmoke',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#EDFFF9',
          }}
        >
          <div
            style={{
              margin: '100px',
              fontSize: '28px',
              color: '#075A4C',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Pioneer in providing legal support for women & children abuse, violence, and harassment in the society.
          </div>

        </div>


        <div
          style={{
            height: 'inherit',
            width: '592px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <h1 fontWeight='600'>About Us</h1>
          <p 
            style={{
              paddingTop: '5px',
            }}
          >
            Manob Sheba O Shamajik Unnayan Shangstaha (MSSUS) is a non-profit and non-government organization initiated in 1998 to help spearhead community driven development initiatives and enable needy community groups to participate in integrated activities to achieve quality livelihood and be self-sustainable. MSSUS delivers its activities through the power and spirit of volunteerism approach to building ...Read More
          </p>
          <p>
          MSSUS is committed to create and enriched, productive, and economically independent society that is free from poverty and where its people can exercise their basic social rights especially focused on women and child rights.
          </p>
          {/* <div
            style={{
              margin: '100px',
              fontSize: '28px',
              color: '#075A4C',
              fontWeight: '600',
              textAlign: 'center',
            }}
          >
            Pioneer in providing legal support for women & children abuse, violence, and harassment in the society.
          </div> */}

        </div>
      </div>
    </Container>
  );
}

export default AboutUs;
