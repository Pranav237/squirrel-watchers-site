import React from 'react';
import NavigationBar from './navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import './contact.css';

function Contact() {
  const cardStyles = {
    width: '300px', // Set a fixed width for all cards
    height: '135px', // Set a fixed height for all cards
    backgroundColor: 'black',
    color: 'gold',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid gold',
    borderRadius: '10px',
    transition: 'transform 0.3s ease-in-out',
    margin: '20px',
    cursor: 'pointer',
  };

  const titleStyle = {
    fontSize: '3em', // Set the font size to match the About Us page
    color: 'gold', // Match the color
    textAlign: 'center',
    marginTop: '26px', // Adjust top margin as needed
  };

  const copyToClipboardFallback = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log(`Fallback: Copying text command was ${msg}`);
      alert("Email address copied to clipboard"); // Provide feedback
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textarea);
  };

  const copyToClipboard = (email) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(() => {
        alert("Info copied to clipboard");
      }, (err) => {
        console.error('Could not copy text: ', err);
        copyToClipboardFallback(email);
      });
    } else {
      copyToClipboardFallback(email);
    }
  };

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
      <NavigationBar />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <Typography variant="h2" component="h2" style={titleStyle} fontWeight={'bold'}>
          Contact Us
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


          {/* Instagram Card */}
          <Card sx={cardStyles}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Follow Us on Instagram
              </Typography>
              <a href="https://www.instagram.com/squirrel_watchers_purdue" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                  <InstagramIcon sx={{ marginRight: '8px' }} />
                  Instagram
                </Typography>
              </a>
            </CardContent>
          </Card>


          {/* Email Card */}
          <Card sx={cardStyles} onClick={() => copyToClipboard('squirrelwatcherspurdue@gmail.com')}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Email Us
              </Typography>
              <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ marginRight: '8px' }} />
                Click to copy email!
              </Typography>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card sx={cardStyles} onClick={() => copyToClipboard('8123901426')}>
            <CardContent>
              <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ marginRight: '8px' }} />
                Click to copy phone number!
              </Typography>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}

export default Contact;
