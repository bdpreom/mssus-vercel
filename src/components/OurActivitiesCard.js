import React from 'react';

export default function OurActivitiesCard({ icon, text }) {
  return (
    <div
      style={{
        // height: '128px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '10px',
        marginTop: '30px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            width='56px'
            height='56px'
            style={{
              borderRadius: '10px',
            }}
            src={icon}
            alt='DSWD logo'
          />
        </div>

      </div>

      <div
        style={{
          marginTop: '10px',
          textAlign: 'center',
          fontSize: '14px',
          width: '150px',
        }}
      >
        <p>
          {text}
        </p>

      </div>
    </div>
  );
}


