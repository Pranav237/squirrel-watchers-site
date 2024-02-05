import React from "react";
import NavigationBar from './navbar'; 
import Pranav from "./pranav1.jpg"; 
import Eleanor from "./eleanor1.jpg"; 
import Hermiony from "./herm1.jpg"; 

function About() {
  const cardStyle = {
    backgroundColor: 'black',
    color: 'gold',
    borderRadius: '10px',
    padding: '15px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  };

  const contentStyle = {
    backgroundColor: '#000000',
    minHeight: 'calc(100vh - 64px)',
    padding: '40px',
    color: 'gold',
  };

  return (
    <div className='main-content'>
      <NavigationBar />
      <div style={contentStyle}>
        <h2 style={{ fontSize: '3em', textAlign: 'center', marginTop: '20px' }}>About Us</h2>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <img src={Pranav} alt="Pranav" style={{ width: '100%', borderRadius: '10px' }} />
            <img src={Eleanor} alt="Eleanor" style={{ width: '100%', borderRadius: '10px' }} />
            <img src={Hermiony} alt="Hermiony" style={{ width: '100%', borderRadius: '10px' }} />
          </div>
          <div style={{ flex: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={cardStyle}>
              <p>Pranav</p>
            </div>
            <div style={cardStyle}>
              <p>Eleanor</p>
            </div>
            <div style={cardStyle}>
              <p>Hermiony</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
