import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavigationBar from './navbar';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

function Join() {
  const titleStyle = {
    fontSize: '3em',
    color: 'gold',
    textAlign: 'center',
    marginTop: '26px',
  };

  const [formData, setFormData] = useState({
    fullName: '',
    instagramUsername: '',
    reasonToJoin: '',
    goals: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'joinForms'), formData);
      console.log('Document written with ID: ', docRef.id);
      setFormData({
        fullName: '',
        instagramUsername: '',
        reasonToJoin: '',
        goals: '',
      });
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div className='main-content'>
      <NavigationBar />
      <Box sx={{ backgroundColor: 'black', minHeight: '100vh', paddingTop: '43px' }}>
        <Typography variant="h2" component="h2" style={titleStyle} fontWeight={'bold'}>
          Join Us
        </Typography>
        <Typography variant="h4" component="div" style={{ color: 'gold', textAlign: 'center', marginTop: '20px' }}>
          Want to be part of the team? Fill out the application below!
        </Typography>

        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
          <form onSubmit={handleSubmit} style={{ backgroundColor: 'black', color: 'gold', borderRadius: '15px', padding: '20px', textAlign: 'center', width: '100%', fontSize: '1em' }}>
            <div style={{ marginBottom: '60px' }}>
              <input type="text" name="fullName" value={formData.fullName} placeholder="Please enter your full name" onChange={handleChange} style={{ backgroundColor: 'black', color: 'gold', border: 'none', borderBottom: '1px solid gold', outline: 'none', padding: '10px', width: '100%', textAlign: 'center' }} required />
            </div>

            <div style={{ marginBottom: '60px' }}>
              <input type="text" name="instagramUsername" value={formData.instagramUsername} placeholder="Please enter your Instagram username" onChange={handleChange} style={{ backgroundColor: 'black', color: 'gold', border: 'none', borderBottom: '1px solid gold', outline: 'none', padding: '10px', width: '100%', textAlign: 'center' }} required />
            </div>

            <div style={{ marginBottom: '60px' }}>
              <input type="text" name="goals" value={formData.goals} placeholder="What do you seek to accomplish and do as a part of the Squirrel Watchers team?" onChange={handleChange} style={{ backgroundColor: 'black', color: 'gold', border: 'none', borderBottom: '1px solid gold', outline: 'none', padding: '10px', width: '100%', textAlign: 'center' }} required />
            </div>
            <button type="submit" style={{ backgroundColor: 'gold', color: 'black', border: 'none', borderRadius: '10px', padding: '15px 30px', cursor: 'pointer' }}>Submit</button>
          </form>
        </Container>
      </Box>
    </div>
  );
}

export default Join;
