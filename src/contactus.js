import React from 'react';
import { Container, Grid, Typography, Button, TextField, Box, Link, IconButton, Paper } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const ContactUsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'primary.main' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" color="text.secondary" paragraph>
        Connect with me on social media or send me a message directly.
      </Typography>

      {/* Social Links */}
      <Box display="flex" justifyContent="center" mb={3}>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          color="primary"
          sx={{ mx: 1, '&:hover': { backgroundColor: 'transparent' } }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          component={Link}
          href="https://twitter.com/your-profile"
          target="_blank"
          color="primary"
          sx={{ mx: 1, '&:hover': { backgroundColor: 'transparent' } }}
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton
          component={Link}
          href="mailto:your-email@example.com"
          color="primary"
          sx={{ mx: 1, '&:hover': { backgroundColor: 'transparent' } }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Contact Form */}
      <Paper
        sx={{
          p: 3,
          backgroundColor: 'background.paper',
          boxShadow: 3,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          required
          sx={{
            '& .MuiInputLabel-root': {
              color: 'text.primary',
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'background.default',
            },
          }}
        />
        <TextField
          label="Your Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          sx={{
            '& .MuiInputLabel-root': {
              color: 'text.primary',
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'background.default',
            },
          }}
        />
        <TextField
          label="Your Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
          sx={{
            '& .MuiInputLabel-root': {
              color: 'text.primary',
            },
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'background.default',
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            alignSelf: 'center',
            width: { xs: '80%', sm: '50%' },
            py: 1.5,
            borderRadius: 1,
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
        >
          Send Message
        </Button>
      </Paper>
    </Container>
  );
};

export default ContactUsSection;
