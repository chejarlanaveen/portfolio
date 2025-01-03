import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({ image, alt, pro }) {
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
        <CardMedia component="img" height="150" image={image} alt={alt} />
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
