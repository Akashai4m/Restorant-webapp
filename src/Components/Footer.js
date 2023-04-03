import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, IconButton, Typography } from '@mui/material';
// import menu from "../images/menu.png";
import { Facebook, Instagram, Twitter } from '@mui/icons-material';


function Footer() {
  return (
    <div>
          <Box sx={{flexGrow:1}} className='About' >
            <Container>
                <Grid container spacing={2} sx={{display:"flex" ,justifyContent:"space-between" ,alignItems:"center"}} >
                    <Grid lg={3} sx={{display:"grid"}}>
                          <Typography variant='h4' color="#DCCA87" marginTop={3} style={{fontFamily:'cormorant upright'}} sx={{ display: { xs: 'none' ,lg:"block"  } }}>Contact Us</Typography>
                          <Typography variant='h8' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}} sx={{ display: { xs: 'none' ,lg:"block"  } }}>9W 53rd SC ,NEW YORK ,NY 10019,USA </Typography>
                          <Typography variant='h8' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}} sx={{ display: { xs: 'none' ,lg:"block"  } }}>+1 212-344-1230</Typography>
                          <Typography variant='h8' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}} sx={{ display: { xs: 'none' ,lg:"block"  } }}>+1 212-555-1230</Typography>
                    </Grid>
                    <Grid lg={4}>
                        <Typography variant='h3'color="#DCCA87" marginTop={3} style={{fontFamily:'cormorant upright'}}>GERICHT</Typography>
                        <Typography variant='body-2' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}}>"The best way to find yourself is to lose yourself in the service of others </Typography>
                        <Grid marginTop={3} sx={{display:"flex" ,justifyContent:'space-evenly'}}>
                            <IconButton sx={{backgroundColor:"transparent"}}><Twitter fontSize='large' style={{color:"#DCCA87"}}/></IconButton>
                            <IconButton sx={{backgroundColor:"transparent"}}><Facebook fontSize='large' style={{color:"#DCCA87"}}/></IconButton>
                            <IconButton sx={{backgroundColor:"transparent"}}><Instagram fontSize='large' style={{color:"#DCCA87"}}/></IconButton>

                        </Grid>

                     </Grid>
                    <Grid lg={3}>
                    <Typography variant='h4' color="#DCCA87" marginTop={3} style={{fontFamily:'cormorant upright'}} sx={{ display: { xs: 'none' ,lg:"block"  } }}>Working Hours</Typography>
                          <Typography variant='h6' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}} sx={{ display: { xs: 'none' ,lg:"block"  } }}>Monday-Friday </Typography>
                          <Typography variant='body-2' color="white" marginTop={2} style={{fontFamily:'cormorant upright'}} sx={{ display: { xs: 'none' ,lg:"block"  } }}>08:00 am -12:00 am</Typography>
                          <Typography variant='h6' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}} sx={{ display: { xs: 'none' ,lg:"block"  } }}>Saturday-Sunday</Typography>
                          <Typography variant='body-2' color="white" marginTop={2} style={{fontFamily:'cormorant upright'}} sx={{ display: { xs: 'none' ,lg:"block"  } }}>07:00 am -11:00 pm</Typography>
                     </Grid>
                </Grid>
                <Grid sx={{display:"flex" ,justifyContent:"center"}} marginTop={4}>
                    <Typography variant='body-3' color="white" style={{fontFamily:'cormorant upright'}} >2021 Gericht.All Rights Reserved.</Typography>
                </Grid>
            </Container>
          </Box>
    </div>
  )
}

export default Footer