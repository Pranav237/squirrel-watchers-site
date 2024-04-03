import React from 'react';
import NavigationBar from './navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css';

function Events() {
    const cardStyles = {
        width: '300px', // Set a fixed width for all cards
        height: '180px', // Set a fixed height for all cards
        backgroundColor: 'black',
        color: 'gold',
        border: '1px solid gold',
        borderRadius: '10px',
        transition: 'transform 0.3s ease-in-out',
        margin: '15px',
        cursor: 'pointer',
    };
      
    // const titleStyle = {
    //     fontSize: '3em', // Set the font size to match the About Us page
    //     color: 'gold', // Match the color
    //     textAlign: 'center',
    //     marginTop: '26px', // Adjust top margin as needed
    // };

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
            <Typography variant="h2" component="h2" style={{fontSize: '3em', color: 'gold', textAlign: 'center', marginTop: '1px'}} fontWeight={'bold'}>
                        Current Events
                    </Typography>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
                        {/* Side by side cards for scheduled events */}
                        <Card sx={{ ...cardStyles, width: '90%', height:'230px'}}>
                            <CardContent>
                                <Typography variant="h5" component="div" style={{ textAlign: 'center' }}>
                                    Logo Design
                                </Typography>
                                <Typography variant="body1" component="div" style={{ marginTop: '20px' }}>
                                    Come to our first event ever! We will host a competition for the best logo design for our club. We will have prizes and food!
                                </Typography>
                                <Typography variant="body2" component="div" style={{ marginTop: '20px', textAlign: 'center' }}>
                                    April 13th, 2024
                                </Typography>
        
                            </CardContent>
                        </Card>
                        {/* Add more cards as needed */}
                    </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <hr style={{ width: '90%', border: '1px solid gold', margin: '30px' }} />

                    {/* Email Card */}
                    <Card sx={cardStyles} onClick={() => copyToClipboard('squirrelwatcherspurdue@gmail.com')}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Email Us
                            </Typography>
                            <Typography variant='h6' sx={{ display: 'flex', alignItems: 'center' }}>
                                Have event ideas? Send us an event request via email!
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <EmailIcon sx={{ marginRight: '8px' }} />
                                Click to copy email!
                            </Typography>
                        </CardContent>
                    </Card>


                </div>
            </div>
        </div>
    );
}

export default Events;
