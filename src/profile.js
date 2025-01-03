import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import './portfolioimg.jpg';

export default function ProfileContainer() {
  const theme = useTheme(); // Get the current theme

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          padding: 3,
          maxWidth: 'lg',
          margin: '0 auto',
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: theme.palette.background.paper,
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: 6, // Increase shadow on hover
            transform: 'scale(1.03)', // Slight zoom effect
          },
          marginTop: 14, // Added top margin
          marginBottom: 4, // Added bottom margin
        }}
      >


        <Avatar
          alt="Profile Picture"
          src="portfolioimg.jpg" // Use an accessible path or a URL for the image
          sx={{
            width: { xs: 210, sm: 180 },
            height: { xs: 210, sm: 180 },
            marginBottom: { xs: 2, sm: 0 },
            marginRight: { sm: 2 },
            border: `3px solid ${theme.palette.primary.main}`,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)', // Slightly zoom the avatar on hover
            },
          }}
        />
        <Box
          sx={{
            textAlign: { xs: 'center', sm: 'left' },
            flex: 1,
            color: theme.palette.text.primary,
            transition: 'all 0.3s ease',
          }}
        >
          <Typography
            variant="h5"
            component="h3"
            sx={{
              fontWeight: 'bold',
              fontFamily: '"Roboto", sans-serif',
              color: theme.palette.text.primary,
            }}
          >
            Naveen
          </Typography>
          
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            I possess hands-on experience in developing real-time web applications using the MERN
            stack (MongoDB, Express.js, React.js, Node.js). Additionally, I am adept at utilizing
            version control with Git and GitHub, and I am comfortable working in development
            environments such as Visual Studio Code.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
