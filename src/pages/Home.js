import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Footer from "./Footer"; // Assume you have a Footer component
import Logo from "./logo1.png"; // Import the logo image

function Home() {
  return (
    <div style={{ backgroundColor: '#CCD5AE', minHeight: '100vh' }}> {/* Tea green for the page background */}
      {/* Navigation Bar */}
      <AppBar position="static" style={{ backgroundColor: '#E9EDC9' }}> {/* Beige for the AppBar */}
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}> {/* Black for the text */}
            <img src={Logo} alt="Logo" style={{ maxWidth: '120px' }} /> {/* Logo displayed here */}
          </Typography>
          <Button style={{ color: 'black', backgroundColor: '#FAEDCD', marginLeft: '10px' }}>About Us</Button>
          <Button style={{ color: 'black', backgroundColor: '#FAEDCD', marginLeft: '10px' }}>Gallery</Button>
          <Button style={{ color: 'black', backgroundColor: '#FAEDCD', marginLeft: '10px' }}>Contact Us</Button>
          <Button style={{ color: 'black', backgroundColor: '#FAEDCD', marginLeft: '10px' }}>Squirrel Hotspots</Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box 
        style={{ 
          height: '250px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          backgroundColor: '#FEFAE0'
        }}
      >
        <Typography variant="h2" component="div" fontFamily="fantasy" style={{ color: 'black' }}>
          The Squirrel Watchers of Purdue
        </Typography>
      </Box>0

      {/* Content Sections with Image Placeholder */}
      <Container maxWidth="md" style={{ display: 'flex', marginTop: '20px', gap: '20px' }}>
        <Box flex={1}>
          <Typography variant="h4" component="h2" gutterBottom style={{ color: 'black' }}>
            Section Title
          </Typography>
          <Typography variant="body1" gutterBottom style={{ color: 'black' }}>
            Your content goes here. Explain what your site is about, its features, or any other important information.
          </Typography>
        </Box>
        <Box flex={1} style={{ maxWidth: '50%' }}> {/* Image Placeholder */}
          {/* Insert <img> tag or another image component here */}
          <div style={{ width: '100%', height: '200px', backgroundColor: '#ddd' }}>Image Placeholder</div>
        </Box>
      </Container>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
