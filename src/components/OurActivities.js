import React from 'react';
import { Container } from 'react-bootstrap';
import RightIcon from '../assets/Right establishment for women & children.png';
import WomenLaborIcon from '../assets/Women labor rights protection.png';
import ChildrenMarriageIcon from '../assets/Children marriage protection.png';
import VocationalTrainingIcon from '../assets/Vocational training for young men & women.png';
import EmploymentGuidanceIcon from '../assets/Employment guidance.png';
import SocialSafetyIcon from '../assets/Social safety net establishment.png';
import GenderDiversityIcon from '../assets/Gender, sex, Female, male.png';
import NutritionAwarenessIcon from '../assets/Nutrition_awareness.png';
import EnvironmentProtectionIcon from '../assets/Environment protection.png';
import ClimateChangeIcon from '../assets/climate change.png';
import OurActivitiesCard from './OurActivitiesCard';

function OurActivities() {
  return (
    <Container
      id='our-activity'
      style={{
        border: 'none',
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
          textAlign: 'center',
        }}
      >
        <h1>
          Our Activities
        </h1>
        <p
          style={{
            marginBottom: '40px',
          }}
        >
          The major activities of MSSUS consists of the following
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '100px',
        }}
      >


        <div
          style={{
            color: '#404040',
            borderBottom: '1px solid #E5E5E5',
            borderRight: '1px solid #E5E5E5',
          }}
        >
          <OurActivitiesCard icon={RightIcon} text='Right establishment for women & children' />
        </div>
        <div
          style={{
            color: '#404040',
            borderBottom: '1px solid #E5E5E5',
            borderRight: '1px solid #E5E5E5',
          }}
        >
          <OurActivitiesCard icon={WomenLaborIcon} text="Women's labor rights protection" />
        </div>
        <div
          style={{
            color: '#404040',
            borderBottom: '1px solid #E5E5E5',
            borderRight: '1px solid #E5E5E5',
          }}
        >
          <OurActivitiesCard icon={ChildrenMarriageIcon} text='Children marriage protection' />
        </div>
        <div
          style={{
            color: '#404040',
            borderBottom: '1px solid #E5E5E5',
            borderRight: '1px solid #E5E5E5',
          }}
        >
          <OurActivitiesCard icon={VocationalTrainingIcon} text='Vocational training for young men & women' />
        </div>
        <div
          style={{
            color: '#404040',
            borderBottom: '1px solid #E5E5E5',
          }}
        >
          <OurActivitiesCard icon={EmploymentGuidanceIcon} text='Employment guidance' />
        </div>
        <div
          style={{
            color: '#404040',
            borderRight: '1px solid #E5E5E5',
          }}
        >
          <OurActivitiesCard icon={SocialSafetyIcon} text='Social safety net establishment' />
        </div>
        <div
          style={{
            color: '#404040',
            borderRight: '1px solid #E5E5E5',
          }}
        >
          <OurActivitiesCard icon={GenderDiversityIcon} text='Gender diversity' />
        </div>
        <div
          style={{
            color: '#404040',
            borderRight: '1px solid #E5E5E5',
          }}
        >
          <OurActivitiesCard icon={NutritionAwarenessIcon} text='Nutrition awareness for women, children, & adolescent' />
        </div>
        <div
          style={{
            color: '#404040',
            borderRight: '1px solid #E5E5E5',
          }}
        >
          <OurActivitiesCard icon={EnvironmentProtectionIcon} text='Environment protection' />
        </div>
        <div
          style={{
            color: '#404040',
          }}
        >
          <OurActivitiesCard icon={ClimateChangeIcon} text='Climate change awareness, advocacy, & coordination' />
        </div>

        {/* <OurActivitiesCard logo={LogoKORMO} departmentName='Department of Youth Development' registrationNo='Khulna - 024/2017' />
        <OurActivitiesCard logo={LogoNAB} departmentName='NGO Affairs Bureau (FD Registration)' registrationNo='1787 - January13, 2003' />
        <OurActivitiesCard logo={LogoFPO} departmentName='Family Planning Office' registrationNo='Affiliation No.: 188/04' /> */}
      </div>
    </Container>
  );
}

export default OurActivities;
