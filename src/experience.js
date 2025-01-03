import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';

const experiences = [
  {
    title: 'Web Development Internship',
    company: 'Tech Innovations Inc.',
    duration: 'June 2023 - August 2023',
    description: 'Assisted in developing and maintaining the front-end of the company website using React and Material-UI.',
  },
  {
    title: 'Capstone Project: IoT Weather Reporting System',
    company: 'University Project',
    duration: 'January 2023 - April 2023',
    description: 'Designed and developed an IoT-based weather reporting system using Raspberry Pi to monitor weather conditions.',
  },
  {
    title: 'Volunteer Web Developer',
    company: 'Local Nonprofit Organization',
    duration: 'September 2022 - November 2022',
    description: 'Collaborated with a team to build a responsive website to promote local events and initiatives.',
  },
  // Add more experiences as needed
];

const ExperienceSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Experience
      </Typography>
      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {experience.title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {experience.company}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {experience.duration}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {experience.description}
                </Typography>
              </CardContent>
              <Box flexGrow={1} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExperienceSection;
