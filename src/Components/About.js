import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import knief from "../images/knife.png";

function About() {
  return (
    <div >
       <Box sx={{flexGrow:1}} className='About'>
        <Container >
            <Grid className="knife"  container spacing={2} sx={{display:"flex",justifyContent:"space-evenly" ,alignItems:'center' ,fontFamily:'cormorant upright' }} >
                <Grid lg={4} paddingRight={1} style={{textAlign:"end" ,fontFamily:'cormorant upright'}} >
                    <Typography marginTop={3} variant='h3' color="#DCCA87" style={{fontFamily:'cormorant upright'}}> About Us</Typography> 
                    <Typography marginTop={3} variant='body-2' color="white" style={{fontFamily:'cormorant upright'}}> Lorem ipsum dolor sit amet ,consectetur adipiscing elit.Quis pharetra adipiscing ultrices vulputate posuere tristique.In sed odio nec aliquet eu proin mauris et.</Typography>
                    <Grid marginTop={3}>
                            <Button variant='contained' style={{backgroundColor:'#DCCA87',color:'black' ,fontFamily:'cormorant upright'}}>Know More </Button>
                        </Grid>
                </Grid>
          <Grid lg={2} >
                    <img src={knief} width={82} height={812} alt="..."></img>
             </Grid> 
            <Grid lg={4} paddingLeft={1} style={{textAlign:"start"}}>
            <Typography marginTop={3} variant='h3' color="#DCCA87" style={{fontFamily:'cormorant upright'}}>Our History</Typography> 
                    <Typography marginTop={3} variant='body-2' color="white" style={{fontFamily:'cormorant upright'}}> Lorem ipsum dolor sit amet ,consectetur adipiscing elit.Quis pharetra adipiscing ultrices vulputate posuere tristique.In sed odio nec aliquet eu proin mauris et.</Typography>
                    <Grid marginTop={3}>
                            <Button variant='contained' style={{backgroundColor:'#DCCA87',color:'black' ,fontFamily:'cormorant upright'}}>Know More </Button>
                        </Grid>
         </Grid>
            </Grid>
        </Container>
       </Box>
    </div>
  )
}

export default About