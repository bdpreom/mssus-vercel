import React from 'react';

export default function LegalStatusCard({ logo, departmentName, registrationNo }) {
  return (
    <div
      style={{
        // height: '128px',
        width: '488px',
        borderRadius: '10px',
        border: '1px solid #008B71',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '20px',
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
            height: '80px',
            width: '80px',
            backgroundColor: 'white',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={logo} alt='DSWD logo' />
        </div>

      </div>

      <div
        style={{
          flex: '0 0 75%',
        }}
      >
        <h5>
          {departmentName}
        </h5>
        <div
          style={{
            fontSize: '10px',
            marginTop: '20px',
          }}
        >
          Registration:
        </div>
        <div>
          {registrationNo}
        </div>

      </div>
    </div>
  );
}


