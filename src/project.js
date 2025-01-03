import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import './taskmanagement.png';
import './portifolio.png';
import './weatherapp.png';

const projects = [
  {
    title: 'Task scheduler',
    description: 'schedule tasks with respective to our daily routine using React.js and Node.js using backend as MongoDB',
    imageUrl: 'taskmanagement.png', // Replace with actual image path
    link: 'https://example.com/weather-project',
    viewcode: 'https://github.com/chejarlanaveen/taskmanagerapp.git'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built using React and Material-UI.',
    imageUrl: 'portifolio.png', // Replace with actual image path
    link: 'https://example.com/portfolio',
    viewcode: ''
  },
  {
    title: 'location-weather application',
    description: 'Fetching weather data with respect to location using literal html/css & javascript using APIs for weather data',
    imageUrl: 'weatherapp.png', // Replace with actual image path
    link: 'https://weather-app-navy-beta.vercel.app/interface.html',
    viewcode: 'https://github.com/chejarlanaveen/weatherapp.git'
  },
  {
    title: 'location-weather application',
    description: 'Finding geolocation with IP address {Networking application with Node.js}',
    imageUrl: 'ipgeolocation.jpg',
    viewcode: 'https://github.com/chejarlanaveen/find-geolocation-using-node.js.git'
  },
  {
    title: 'File Upload with Postman Tool',
    description: 'Uploading a file using Postman API tool with Express.js and Node.js',
    imageUrl: 'fileupload.jpg',
    viewcode: 'https://github.com/chejarlanaveen/file-upload-via-postman.git'
  }
];

const ProjectsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, borderRadius: 2, mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { md: 'center' },
                backgroundColor: '#f5f5f5',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'scale(1.02)',
                },
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              }}
            >
              <CardMedia
                component="img"
                image={project.imageUrl}
                alt={project.title}
                sx={{
                  height: { xs: 200, md: 150 },
                  width: { md: '30%' },
                  borderRadius: 1,
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flex: 1,
                  p: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    href={project.link}
                    target="_blank"
                    sx={{ mt: 2 }}
                  >
                    View Project
                  </Button>
                  {/* Only show the "View Code" button if there's a viewcode URL */}
                  {project.viewcode && (
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      href={project.viewcode}
                      target="_blank"
                      sx={{ mt: 2, ml: 2 }}
                    >
                      View Code
                    </Button>
                  )}
                </CardActions>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsSection;
