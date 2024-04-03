import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField'; // Import TextField component
import Button from '@mui/material/Button'; // Import Button component for the submit button
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
              <TextField
                fullWidth
                id="fullName"
                label="Full Name"
                autoComplete='off'
                variant="standard"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                InputProps={{
                  style: { color: 'gold' },
                }}
                InputLabelProps={{
                  style: { color: 'gold' }, // This will make the label gold and bold
                }}
                sx={{ '& .MuiInput-underline:before': { borderBottomColor: 'gold' } }}
                required
              />
            </div>
            
            <div style={{ marginBottom: '60px' }}>
              <TextField
                fullWidth
                id="instagramUsername"
                label="Instagram Username"
                variant="standard"
                autoComplete='off'
                name="instagramUsername"
                value={formData.instagramUsername}
                onChange={handleChange}
                InputProps={{
                  style: { color: 'gold' },
                }}
                InputLabelProps={{
                  style: { color: 'gold' }, // This will make the label gold and bold
                }}
                sx={{ '& .MuiInput-underline:before': { borderBottomColor: 'gold' } }}
                required
              />
            </div>
            
            <div style={{ marginBottom: '60px' }}>
              <TextField
                fullWidth
                id="goals"
                label="What are your goals as part of the team?"
                variant="standard"
                name="goals"
                autoComplete='off'
                value={formData.goals}
                onChange={handleChange}
                InputProps={{
                  style: { color: 'gold' },
                }}
                InputLabelProps={{
                  style: { color: 'gold', maxWidth: '100%', wordWrap: 'break-word' }
                }}
                sx={{ '& .MuiInput-underline:before': { borderBottomColor: 'gold' } }}
                multiline
                rows={4}
                required
              />
            </div>
            
            <Button variant="contained" type="submit" sx={{ backgroundColor: 'gold', color: 'black', '&:hover': { backgroundColor: '#b29600' }, borderRadius: '10px', padding: '15px 30px' }}>
              Submit
            </Button>
          </form>
        </Container>
      </Box>
    </div>
  );
}

export default Join;
