import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    description: 'Certification for designing scalable, cost-optimized cloud solutions on AWS.',
    date: 'March 2023',
    link: 'https://example.com/aws-certification',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    description: 'Specialization in data analytics using Google tools and methodologies.',
    date: 'June 2022',
    link: 'https://example.com/google-data-analytics',
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    description: 'Certification in managing, deploying, and configuring Kubernetes clusters.',
    date: 'September 2023',
    link: 'https://example.com/kubernetes-certification',
  },
  // Add more certifications as needed
];

const CertificationsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Certifications
      </Typography>
      <Grid container spacing={4}>
        {certifications.map((certification, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {certification.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {certification.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {certification.description}
                </Typography>
              </CardContent>
              <Box flexGrow={1} />
              <Box sx={{ p: 2 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  href={certification.link}
                  target="_blank"
                  fullWidth
                >
                  View Certificate
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CertificationsSection;
