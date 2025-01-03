import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import ActionAreaCard from './cards.js';
import Typography from '@mui/material/Typography';

import './chatgpt.png';
import './github.png';
import './html.png';
import './javascript.png';
import './reactjs.png';
import './nodejs.png';
import './mysql.jpg';
import './mongodb.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#fff' : 'aliceblue',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  let skillset = [
    { image: 'reactjs.png', alt: 'React.js', pro: 'Intermediate' },
    { image: 'nodejs.png', alt: 'Node.js', pro: 'Beginner' },
    //{ image: 'javascript.png', alt: 'Javascript', pro: 'Intermediate' },
    //{ image: 'html.png', alt: 'HTML & CSS', pro: 'Intermediate' },
    { image: 'mysql.jpg', alt: 'MySQL', pro: 'Intermediate' },
    { image: 'mongodb.png', alt: 'MongoDB', pro: 'Beginner' },
    { image: 'github.png', alt: 'MongoDB', pro: 'Beginner' },
    { image: 'chatgpt.png', alt: 'MongoDB', pro: 'Beginner' }
  ];

  return (
    <Container sx={{ marginTop: 4, borderRadius: 7, color: 'white' }} maxWidth='xl'>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Skills
      </Typography>

      <React.Fragment>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, justifyContent: 'center' }}>
          {skillset.map((skills) => {
            return (
              <Item
                sx={{
                  height: 'auto',
                  width: { xs: 270, sm: 230, md: 220, lg: 250, xl: 210 },
                  justifyContent: { xs: 'center' },
                  m: 3,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease',
                    boxShadow: 5,
                  },
                }}
              >
                <ActionAreaCard image={skills.image} alt={skills.alt} pro={skills
                  
                  .pro} />
              </Item>
            );
          })}
        </Box>
      </React.Fragment>
    </Container>
  );
}
