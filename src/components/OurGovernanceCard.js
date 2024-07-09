import React from 'react';

export default function OurGovernanceCard({ image, title, subTitle, description }) {
  return (
    <div
      style={{
        // height: '128px',
        width: '780px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '0 0 25%',
        }}
      >

        <div
          style={{
            height: '172px',
            width: '132px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            width='132px'
            height='172px' 
            style={{
              borderRadius: '10px',
            }}
            src={image}
            alt='DSWD logo'
          />
        </div>

      </div>

      <div
        style={{
          flex: '0 0 75%',
        }}
      >
      <h5>
        {title}
      </h5>
        <h6>
          {subTitle}
        </h6>
        <p
          style={{
            marginTop: '20px',
          }}
        >
          {description}
        </p>

      </div>
    </div>
  );
}


