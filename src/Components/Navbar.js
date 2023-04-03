import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

function Navbar() {
  return (
    <div style={{backgroundColor:"#000000"}} >
        <Box>
          <Container><br/>
            <Grid container spacing={2} >
               <Grid lg={3} style={{display:"flex" ,alignItems:"center"}}>
                 <Typography variant='h5'color="white" >GERICHT</Typography>
               </Grid>
               <Grid lg={4.5} style={{display:"flex" ,justifyContent:"space-evenly"}} >
                 <Grid lg={1}  sx={{ display: { xs: 'none' ,lg:"block"  } }}>
                 <Typography variant='h8' color="white">Home</Typography>
                 </Grid>
                 <Grid lg={1}  sx={{ display: { xs: 'none' ,lg:"block" } }}>
                 <Typography variant='h8' color="white">Pages</Typography>
                 </Grid>
                 <Grid lg={1.2}  sx={{ display: { xs: 'none' ,lg:"block" } }}>
                 <Typography variant='h8' color="white">Contact&nbsp;us</Typography>
                  </Grid>
                  <Grid lg={1}  sx={{ display: { xs: 'none' ,lg:'block' } }}>
                  <Typography variant='h8'color="white">Blog</Typography>
                  </Grid>
               </Grid>
               <Grid lg={2.5} style={{display:"flex" ,justifyContent:"space-evenly"}}>
                <Grid lg={1.2}>
                 <Typography style={{color:"white"}}>Login</Typography>
                </Grid>
                <Grid lg={1.2}>
                <Typography style={{color:"white"}}>Registration</Typography>
                  </Grid>
                </Grid>
                <Grid lg={2} style={{display:"flex" ,justifyContent:"end"}}>
                <Typography style={{color:"white"}} >Book Table</Typography>
                </Grid>
                
            </Grid>
            </Container>
            <br/><br/>
        </Box>
    </div>
  )
}

export default Navbar