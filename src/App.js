import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

import Hero from './components/Hero';
import Stats from './components/Stats';
import AboutUs from './components/AboutUs';
import LegalStatus from './components/LegalStatus';
import OurGovernance from './components/OurGovernance';
import OurActivities from './components/OurActivities';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#105F52',
          height: '800px',
        }}
      >
        <Header />
        <Hero />
      </div>
      <Stats />
      <AboutUs />
      <LegalStatus />
      <OurGovernance />
      <OurActivities />
      <Footer />
    </div>
  );
}

export default App;
