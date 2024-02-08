import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavigationBar from './navbar';
import './App.css'; // Make sure your CSS file has the fadeInUp keyframes

function Home() {
  const title = "The Squirrel Watchers of Purdue University";
  const words = title.split(" ");
  const cumulativeDelay = words.map((word, index) => 
    words.slice(0, index).reduce((acc, cur) => acc + cur.length, 0)
  );

  return (
    <div className='main-content'>
      <NavigationBar /> 3 
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '10px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: 'gold',
            fontFamily: 'Roboto',
            fontSize: { xs: '5vw', sm: '3rem' },
            margin: '10px 0',
          }}
        >
          {words.map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word.split("").map((char, charIndex) => (
                <span 
                  key={charIndex}
                  className="animated-letter"
                  style={{ 
                    animationDelay: `${(cumulativeDelay[wordIndex] + charIndex) * 0.1}s`
                  }}
                >
                  {char}
                </span>
              ))}
              {wordIndex < words.length - 1 && <span>&nbsp;</span>}
            </React.Fragment>
          ))}
        </Typography>
      </Box>

      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Box 
          sx={{
            backgroundColor: 'black',
            color: 'gold',
            border: '1px solid gold',
            borderRadius: '15px',
            padding: '15px',
            textAlign: 'center',
            width: '100%',
            fontSize: '1em',
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom fontSize={{ xs: '1.25em', sm: '1.5em' }}>
            Hello!
          </Typography>
          <Typography variant="body1" gutterBottom fontSize={{ xs: '1em', sm: '1em' }}>
            We are the squirrel watchers of Purdue University. In a NUTshell (get it?), we spot squirrels, take photos, and upload them.
          </Typography>
        </Box>
        
        <Box
          sx={{
            backgroundColor: 'black',
            color: 'gold',
            border: '1px solid gold',
            borderRadius: '15px',
            padding: '15px',
            textAlign: 'center',
            width: '100%',
            fontSize: '1em',
          }}
        >
          <Typography variant="body1" gutterBottom fontSize={{ xs: '0.75em', sm: '1em' }}>
            Submit your pictures here to be featured on our Instagram page!
          </Typography>

        </Box>
      </Container>

    </div>
  );
}

export default Home;
