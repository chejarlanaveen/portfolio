/*import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Grid } from '@mui/material';
import ActionAreaCard from './cards';
export default function MediaControlCard({children}){

  return ( 
          <Box sx={{width:"100%",display:'flex'}} >
            <Grid container xs={{flexDirection:'row-reverse'}}>
              <Grid item>
                <item>
                    {children}
                </item>
              </Grid>
            </Grid>
          </Box>
        
  );
}*/

import * as React from 'react';
//import { styled } from '@mui/material/styles';
//import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
//import Typography from '@mui/material/Typography';
//import ButtonBase from '@mui/material/ButtonBase';



export default function ComplexGrid({children}) {
  return (
    <Paper
      sx={{
        p: 2,
        marginLeft: 3,
        maxWidth: 600,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        display:'flex',
        alignContent:'flex-start',
      }}
    >
      {children}
    </Paper>
  );
}
