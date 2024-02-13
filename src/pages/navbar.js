import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// import Logo from "./logo1.png"; // Make sure this path is correct

function NavigationBar() {
  const [clicked, setClicked] = useState('');

  const handleClick = (buttonName) => {
    setClicked(buttonName);
    setTimeout(() => setClicked(''), 200); // Reset after 200ms
  };

  const buttonStyle = (buttonName) => ({
    color: clicked === buttonName ? 'black' : 'gold',
    backgroundColor: clicked === buttonName ? 'gold' : 'transparent', // transparent to match AppBar
    marginLeft: '15px',
    '&:hover': {
      backgroundColor: 'gold',
      color: 'black',
    },
    transition: 'background-color 0.2s, color 0.2s'
  });

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ justifyContent: 'center', position: 'relative' }}>
      

        {/* Centered navigation buttons */}
        <Box sx={{ display: 'flex' }}>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <Button sx={buttonStyle('home')} onClick={() => handleClick('home')}>Home</Button>
          </Link>
          <Link to="/events" style={{ textDecoration: 'none' }}>
            <Button sx={buttonStyle('about')} onClick={() => handleClick('about')}>Events</Button>
          </Link>
          <Link to="/gallery" style={{ textDecoration: 'none' }}>
            <Button sx={buttonStyle('gallery')} onClick={() => handleClick('gallery')}>Gallery</Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button sx={buttonStyle('contact')} onClick={() => handleClick('contact')}>Contact Us</Button>
          </Link>
          {/* <Link to="/hotspots" style={{ textDecoration: 'none' }}>
            <Button sx={buttonStyle('hotspots')} onClick={() => handleClick('hotspots')}>Squirrel Hotspots</Button>
          </Link> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;
