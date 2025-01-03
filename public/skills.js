import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Paper } from '@mui/material';

// Styled component for wrapping the grid items
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : 'aliceblue',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'censter',
  color: theme.palette.text.secondary,
}));

// Card component to display each skill
function ActionAreaCard({ image, alt, pro }) {
  return (
    <Card
      sx={{
        maxWidth: 300,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          transform: 'scale(1.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt={alt}
          sx={{
            objectFit: 'cover',
            width: '100%',
            borderRadius: '4px',
          }}
        />
        <CardContent sx={{ bgcolor: 'black', color: 'white' }}>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: 'white' }}>
            {alt}
          </Typography>
          <Typography gutterBottom variant="h6" component="div" sx={{ color: 'white' }}>
            Proficiency: {pro}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// Main responsive grid component
export default function ResponsiveGrid() {
  // Skill data
  const skillset = [
    { image: 'reactjs.png', alt: 'React.js', pro: 'Intermediate' },
    { image: 'nodejs.png', alt: 'Node.js', pro: 'Beginner' },
    { image: 'javascript.png', alt: 'Javascript', pro: 'Intermediate' },
    { image: 'html.png', alt: 'HTML & CSS', pro: 'Intermediate' },
    { image: 'mysql.jpg', alt: 'MySQL', pro: 'Intermediate' },
    { image: 'mongodb.png', alt: 'MongoDB', pro: 'Beginner' },
    { image: 'github.png', alt: 'GitHub', pro: 'Beginner' },
    { image: 'chatgpt.png', alt: 'ChatGPT', pro: 'Beginner' },
  ];

  return (
    <Container sx={{ marginTop: 4, borderRadius: 7, color: 'white' }} maxWidth="xl">
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Skills
      </Typography>

      <React.Fragment>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, justifyContent: 'center' }}>
          {skillset.map((skills, index) => (
            <Item
              key={index}
              sx={{
                width: { xs: 270, sm: 230, md: 220, lg: 250, xl: 210 },
                justifyContent: 'center',
                m: 3,
                '&:hover': {
                  transform: 'scale(1.05)',
                  transition: 'transform 0.3s ease',
                  boxShadow: 5,
                },
              }}
            >
              <ActionAreaCard image={skills.image} alt={skills.alt} pro={skills.pro} />
            </Item>
          ))}
        </Box>
      </React.Fragment>
    </Container>
  );
}
