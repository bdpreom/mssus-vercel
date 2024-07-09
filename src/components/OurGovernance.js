import React from 'react';
import { Container } from 'react-bootstrap';
import AdvImage from '../assets/adv_shamima_sultana_shilu.png';
import GeneralBodyImage from '../assets/general_body.png';
import ExecutiveCommitteImage from '../assets/executive_committe.png';
import OurGovernanceCard from './OurGovernanceCard';

function OurGovernance() {
  return (
    <Container
      id='our-governance'
      style={{
        border: 'none',
        marginTop: '40px',
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          margin: '10px',
          marginTop: '40px',
          textAlign: 'center',
        }}
      >
        <h1>
          Our Governance
        </h1>
        <p
          style={{
            marginBottom: '40px',
          }}
        >
          MSSUS is founded and operated by experienced, dedicated, and hard working people
        </p>
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


        <OurGovernanceCard image={AdvImage} title='Adv Shamima Sultana (Shilu)' subTitle='Founder & CEO' description='Adv Shamima Sultana (Shilu) completed her BA (Hons) & MA in literature from the University of Rajshahi. She then completed her LLB from the same university. She has over 40 years of experience in social activities.' />
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#E5E5E5',

          }}
        />
        <OurGovernanceCard image={GeneralBodyImage} title='General Body' subTitle='' description='The general body consists of 27 general members who decide the overall programmatic directions and annual operation plans.' />
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#E5E5E5',

          }}
        />
        <OurGovernanceCard image={ExecutiveCommitteImage} title='Executive Committee' subTitle='' description='The Executive Committee (EC) consists of 9 elected members out of 27 general members. They meet every two months interval regularly and make decisions as per constitutional requirements. The Executive Committee may call for an emergency meeting at any time as per the need of the organization. They are responsible for the overall management of the organization. The general secretary is the Chief Executive of the organization.' />
        <div
          style={{
            width: '100%',
            height: '1px',
            backgroundColor: '#E5E5E5',

          }}
        />

        {/* <OurGovernanceCard logo={LogoKORMO} departmentName='Department of Youth Development' registrationNo='Khulna - 024/2017' />
        <OurGovernanceCard logo={LogoNAB} departmentName='NGO Affairs Bureau (FD Registration)' registrationNo='1787 - January13, 2003' />
        <OurGovernanceCard logo={LogoFPO} departmentName='Family Planning Office' registrationNo='Affiliation No.: 188/04' /> */}
      </div>
    </Container>
  );
}

export default OurGovernance;
