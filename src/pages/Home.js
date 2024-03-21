import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavigationBar from './navbar';
import FileUploadOutlined from '@mui/icons-material/FileUploadOutlined';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import newlogo from "../images/newlogo.jpg";
import { uploadBytes, ref, collection, addDoc, getDownloadURL, storage, db } from '../firebase'; 
import './App.css';

function Home() {
  const word1 = "S Q U I R R E L".split(" ");
  const word2 = "W A T C H E R S".split(" ");
  const word3 = "A T".split(" ");
  const word4 = "P U R D U E".split(" ");

  const cumulativeDelay = word1.map((word, index) =>
    word1.slice(0, index).reduce((acc, cur) => acc + cur.length, 0)
  );
  const [instagramUsername, setInstagramUsername] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true); // State to track form validity

  const handleUploadClick = () => {
    if (!selectedFile || !instagramUsername) {
      setIsFormValid(false); // Set form validity to false if either field is empty
      return;
    }

    const storageRef = ref(storage, `images/${instagramUsername}/${selectedFile.name}`);
    uploadBytes(storageRef, selectedFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        addDoc(collection(db, "images"), {
          name: selectedFile.name,
          url: downloadURL,
          createdAt: new Date()
        });
        setOpenSnackbar(true);
      });
    });
  };

  return (
    <div className='main-content'>
      <NavigationBar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop: '55px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: 'gold',
            fontFamily: 'serif',
            fontSize: { xs: '5vw', sm: '3rem' },
            margin: '10px 0',
            textAlign:'center'
          }}
        >
          
          {word1.map((word, wordIndex) => (
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
              {wordIndex < word1.length - 1 && <span>&nbsp;</span>}
            </React.Fragment>
          ))}
        </Typography>
{/* ---- */}
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: 'gold',
            fontFamily: 'serif',
            fontSize: { xs: '5vw', sm: '3rem' },
            margin: '10px 0',
          }}
        >
          
          {word2.map((word, wordIndex) => (
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
              {wordIndex < word2.length - 1 && <span>&nbsp;</span>}
            </React.Fragment>
          ))}
        </Typography>
{/* ---- */}
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: 'gold',
            fontFamily: 'serif',
            fontSize: { xs: '5vw', sm: '3rem' },
            margin: '10px 0',
          }}
        >
          
          {word3.map((word, wordIndex) => (
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
              {wordIndex < word3.length - 1 && <span>&nbsp;</span>}
            </React.Fragment>
          ))}
        </Typography>
{/* ---- */}

      <Typography
                variant="h3"
                component="div"
                sx={{
                  color: 'gold',
                  fontFamily: 'serif',
                  fontSize: { xs: '5vw', sm: '3rem' },
                  margin: '10px 0',
                }}
              >
                
                {word4.map((word, wordIndex) => (
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
                    {wordIndex < word4.length - 1 && <span>&nbsp;</span>}
                  </React.Fragment>
                ))}
              </Typography>

      </Box>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', alignItems:'center'}}>
        <img src={newlogo} alt="logo" style={{ width: '10%', borderRadius: '10px' }} />
      </div>


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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1em',
          }}
        >
          <Typography variant="body1" gutterBottom fontSize={{ xs: '0.75em', sm: '1em' }}>
            Submit your pictures here to be featured on our Instagram page!
          </Typography>
          <input
            type="text"
            placeholder="Instagram Username"
            value={instagramUsername}
            onChange={(e) => {
              setInstagramUsername(e.target.value);
              setIsFormValid(true); // Reset form validity on input change
            }}
            style={{
              backgroundColor: 'black',
              color: 'gold',
              border: isFormValid ? '1px solid gold' : '1px solid red', // Apply red border if form is invalid
              borderRadius: '15px',
              padding: '10px',
              width: '35%',
              textAlign: 'center', // Center the text horizontally
            }}
          />
          <Button
            variant="contained"
            component="label"
            startIcon={<FileUploadOutlined />}
            sx={{ backgroundColor: 'gold', textTransform: 'none', color: 'black', '&:hover': { backgroundColor: '#b29d4f' } }}
          >
            Upload Media
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => {
                setSelectedFile(e.target.files[0]);
                setIsFormValid(true); // Reset form validity on file selection
              }}
            />
          </Button>
          {selectedFile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: '10px' }}>
              <Typography variant="body2">{selectedFile.name}</Typography>
              <img src={URL.createObjectURL(selectedFile)} alt={selectedFile.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
            </Box>
          )}
          <Button
            variant="contained"
            onClick={handleUploadClick}
            sx={{ backgroundColor: 'gold', textTransform: 'none',color: 'black', '&:hover': { backgroundColor: '#b29d4f' } }}
          >
            Submit
          </Button>
          {!isFormValid && (
            <Typography variant="caption" sx={{ color: 'red' }}>Please fill out all fields.</Typography>
          )}
        </Box>
      </Container>
  
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="Media uploaded successfully!"
      />
    </div>
  );
}

export default Home;
