import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const educationData = [
  {
    school: 'NBKR Institute Of Science & Technology',
    degree: 'Bachelor Of Technology',
    duration: '2021 - 2025',
    description: 'Computer Science Engineering',
  },
  // Add more education entries here as needed
];

const EducationSection = () => {
  const theme = useTheme(); // Access the current theme

  return (
    <Box sx={{ padding: 6, maxWidth:'85%', margin: '0 auto'  }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Education
      </Typography>

      {educationData.map((item, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            padding: 3,
            marginY: 2,
            backgroundColor: theme.palette.background.paper,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: `0 4px 12px ${theme.palette.primary.main}`,
            },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
            {item.school}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {item.degree}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.duration}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" color={theme.palette.text.primary}>
            {item.description}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default EducationSection;
