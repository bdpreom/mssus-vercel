import React from 'react';
import { Container } from 'react-bootstrap';
import LogoDSWD from '../assets/logo_dswd.png';
import LogoKORMO from '../assets/logo_kormo.png';
import LogoNAB from '../assets/logo_nab.png';
import LogoFPO from '../assets/logo_fpo.png';
import LegalStatusCard from './LegalStatusCard';

function LegalStatus() {
  return (
    <Container
      id='legal-status'
      style={{
        backgroundColor: '#105F52',
        border: 'none',
        marginTop: '100px',
        borderRadius: '15px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          margin: '10px',
          marginTop: '100px',
          textAlign: 'center',
        }}
      >
        <h1>
          Legal Status
        </h1>
        <p
          style={{
            marginBottom: '40px',
          }}
        >MSSUS is registered with the following departments of the Government of Bangladesh</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '30px',
          marginBottom: '100px',
        }}
      >
        <LegalStatusCard logo={LogoDSWD} departmentName='Department of Social Welfare' registrationNo='Khulna/1015/2001 - September 17, 2001' />
        <LegalStatusCard logo={LogoKORMO} departmentName='Department of Youth Development' registrationNo='Khulna - 024/2017' />
        <LegalStatusCard logo={LogoNAB} departmentName='NGO Affairs Bureau (FD Registration)' registrationNo='1787 - January13, 2003' />
        <LegalStatusCard logo={LogoFPO} departmentName='Family Planning Office' registrationNo='Affiliation No.: 188/04' />
      </div>
    </Container>
  );
}

export default LegalStatus;
