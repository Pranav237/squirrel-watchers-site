import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavigationBar from './navbar';
import FileUploadOutlined from '@mui/icons-material/FileUploadOutlined';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { uploadBytes, ref, collection, addDoc, getDownloadURL, storage, db } from '../firebase'; 
import './App.css';

function Home() {
  const words = "The Squirrel Watchers of Purdue University".split(" ");
  const cumulativeDelay = words.map((word, index) => 
    words.slice(0, index).reduce((acc, cur) => acc + cur.length, 0)
  );
  const [instagramUsername, setInstagramUsername] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleUploadClick = () => {
    if (!selectedFile || !instagramUsername) return;

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
            onChange={(e) => setInstagramUsername(e.target.value)}
            style={{
              backgroundColor: 'black',
              color: 'gold',
              border: '1px solid gold',
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
            sx={{ backgroundColor: 'gold', color: 'black', '&:hover': { backgroundColor: '#b29d4f' } }}
          >
            Upload Media
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setSelectedFile(e.target.files[0])}
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
            sx={{ backgroundColor: 'gold', color: 'black', '&:hover': { backgroundColor: '#b29d4f' } }}
          >
            Submit
          </Button>
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
