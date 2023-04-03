import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import gallery01 from "../images/gallery01.png";
import gallery02 from "../images/gallery02.png";
import gallery03 from "../images/gallery03.png";
import gallery04 from "../images/gallery04.png";



function Gallery() {
  return (
    <div>
       <Box >
        <br/><br/>
        <Container>
            <Grid container  sx={{display:"flex" ,justifyContent:"space-around"}}>
                <Grid lg={4} sx={{textAlign:"start"}}>
                    <Typography variant='h6' color="white" style={{fontFamily:'cormorant upright'}}>Instagram</Typography>
                    <Typography variant='h3' marginTop={3} color="#DCCA87"style={{fontFamily:'cormorant upright'}} >Photo Gallery</Typography>
                    <Typography variant='body-2' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}}>Lorem ipsum dolor sit amet ,consecturer  adispiscing elit. volutat mattis ipsum turpis elit elit scelerisque egestas mu.</Typography>
                    <Grid marginTop={3} marginBottom={2}>
                        <Button variant='contained' style={{backgroundColor:'#DCCA87',color:'black' ,fontFamily:'cormorant upright'}}>View More </Button>
                    </Grid>
                </Grid>
                <Grid lg={8} sx={{display:"flex" ,flexWrap:"wrap", justifyContent:"space-between" ,alignItems:"center"}}>
                        <img  src={gallery01} alt=".." width={180} height={270}></img>
                        <img src={gallery02} alt=".." width={180} height={270}></img>
                        <img src={gallery03} alt=".." width={180} height={270}></img>
                     <Grid>   <img  src={gallery04} alt=".." width={180} height={270}></img></Grid>

                    </Grid>
            </Grid>
        </Container>
        <br/><br/>
       </Box>
    </div>
  )
}

export default Gallery