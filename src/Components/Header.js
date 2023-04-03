import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import Welcome from "../images/welcome.png";

function Header() {
  return (
    <div style={{backgroundColor:"#000000" ,fontFamily:'cormorant upright'}}>
        <Box sx={{flexGrow:1}}>
            <Container>
                <Grid container spacing={2} style={{display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                    <Grid lg={4} sx={{textAlign:"start"}} paddingLeft={1} >
                        <Typography variant='h7' marginTop={3} color="white">Chase The New Flavour</Typography>
                        <Typography variant='h2'marginTop={3} color="#DCCA87" style={{fontFamily:'cormorant upright'}}>The Key To Fine Dining</Typography>
                        <Typography variant='body-2'marginTop={5} color="white">Sit tellus lobortis sed senectus vivamus molestie.Condimentum volutpat morbi facilisis quam scelerisque sapien. Et , penatibus aliquam amet tellus</Typography>
                        <Grid marginTop={4} marginBottom={2}>
                            <Button variant='contained'  style={{backgroundColor:'#DCCA87',color:'black' ,fontFamily:'cormorant upright'}}>Explore Now</Button>
                        </Grid>
                    </Grid>
                    <Grid lg={6}>
                        <img src={Welcome} width={390} height={390} alt="......"></img>
                    </Grid>
                </Grid>
            </Container>
            <br/><br/>
        </Box>
    </div>
  )
}

export default Header