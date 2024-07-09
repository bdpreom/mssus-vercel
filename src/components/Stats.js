import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarCheck, faHandshake } from '@fortawesome/free-regular-svg-icons';

function Stats() {
  return (
    <Container
      style={{
        height: '144px',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        transform: 'translateY(-50%)', 
        backgroundColor: 'white',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)', /* Bottom shadow */
      }}
    >

      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            border: '1px solid #000',
          }}
        >
          <FontAwesomeIcon icon={faCalendarCheck} size='3x' />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: '600',
            }}
          >
            500+
          </div>
          <div>
            Events Completed
          </div>
        </div>
      </div>

      <div
        style={{
          width: '1px',
          height: '100px',
          backgroundColor: '#E5E5E5',

        }}
      />

      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            border: '1px solid #000',
          }}
        >
          <FontAwesomeIcon icon={faCalendar} size='3x' />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: '600',
            }}
          >
            5+
          </div>
          <div>
            Years Completed
          </div>
        </div>
      </div>

      <div
        style={{
          width: '1px',
          height: '100px',
          backgroundColor: '#E5E5E5',

        }}
      />

      <div
        style={{
          display: 'flex',
          gap: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            border: '1px solid #000',
          }}
        >
          <FontAwesomeIcon icon={faHandshake} size='3x' />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: '600',
            }}
          >
            200+
          </div>
          <div>
            Projects Completed
          </div>
        </div>
      </div>

    </Container >
  );
}

export default Stats;
