import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ResponsiveAppBar from './AppBar';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{bgcolor:'black', height:'100vh'}}>
        <Box sx={{ bgcolor: '#cfe8fc', height: '10vh', borderRadius:20}}>
          <ResponsiveAppBar/>
        </Box>
      </Container>
    </React.Fragment>
  );
}