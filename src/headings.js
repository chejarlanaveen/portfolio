import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:'black',
  ...theme.typography.body2,
  padding: theme.spacing(1,4),
  //borderRadius: theme.shape.borderRadius,
  textAlign: 'left',
  color:'whitesmoke',
}));

export default function BasicStack({heading}) {
  return (
    <Box sx={{width:'100%'}}>
      <Stack spacing={2}>
        <Item sx={{fontSize:50, letterSpacing:3, fontWeight:4, borderRadius:4}} >{heading}</Item>
      </Stack>
    </Box>
  );
}



