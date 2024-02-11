import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavigationBar from './navbar';
import FileUploadOutlined from '@mui/icons-material/FileUploadOutlined';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
// Import Firebase services from firebase.js instead of initializing here
import { storage, db, ref, uploadBytes, getDownloadURL, collection, addDoc, deleteObject} from '../firebase'; 
import './App.css';

function Home() {

  const words = "The Squirrel Watchers of Purdue University".split(" ");
  // Define 'cumulativeDelay' if it is used for display
  const cumulativeDelay = words.map((word, index) => 
    words.slice(0, index).reduce((acc, cur) => acc + cur.length, 0)
  );
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
    const q = query(collection(db, "images"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const files = querySnapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        url: doc.data().url,
      }));
      console.log(files); // Debug: Log files to console
      setUploadedFiles(files);
    });
  
    return () => unsubscribe();
  }, []);

const handleUploadClick = (event) => {
  const files = event.target.files;
  if (files.length === 0) return;

  Array.from(files).forEach(file => {
    const storageRef = ref(storage, `images/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((downloadURL) => {
        addDoc(collection(db, "images"), {
          name: file.name,
          url: downloadURL,
          createdAt: new Date()
        }); // Removed the then() with setUploadedFiles call
      });
    });
  });
};

  const handleDeleteFile = (fileName, fileId) => {
    // Create a reference to the file to delete
    const fileRef = ref(storage, `images/${fileName}`);

    // Delete the file from Firebase Storage
    deleteObject(fileRef).then(() => {
      // Remove the file reference from the Firestore
      const docRef = doc(db, "images", fileId);
      deleteDoc(docRef).then(() => {
        // Update the state to remove the file from the list
        setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
      });
    }).catch((error) => {
      console.error("Error removing file: ", error);
      // Optionally, you can handle the error, such as displaying an error message to the user
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
          padding: '55px',
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
          <Button
            variant="contained"
            component="label"
            startIcon={<FileUploadOutlined />}
            sx={{ backgroundColor: 'gold', color: 'black', '&:hover': { backgroundColor: '#b29d4f' } }}
          >
            Upload Media
            <input
              type="file"
              multiple
              accept="image/*"
              hidden
              onChange={handleUploadClick}
            />
          </Button>
          {uploadedFiles.map(file => (
            file.name && file.url && ( // Check if `name` and `url` are not undefined or empty
            <Box key={file.id} sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: '10px' }}>
              <Typography variant="body2">{file.name}</Typography>
                <IconButton color="error" onClick={() => handleDeleteFile(file.name, file.id)}>
                <DeleteIcon />
                </IconButton>
            </Box>
  )
))}

        </Box>
      </Container>
  
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Media uploaded successfully!"
      />
    </div>
  );}

export default Home;