import * as React from 'react';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
const Img = styled('img')({
    margin: 2,
    display: 'block',
    maxWidth: 200,
    maxHeight: 250,
    border:'solid black 1px'
  });

export default function Personalcard(image){
    return(
<Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 250, height: 170 }}>
            <Img alt="complex" src={image}/>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="body2" gutterBottom>
              The spacing between items is implemented with a negative margin. 
              This might lead to unexpected behaviors. For instance, 
              to apply a background color,
              you need to apply display: flex; to the parent.
              </Typography>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
}