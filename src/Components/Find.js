import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import findus from "../images/findus.png";


function Find() {
  return (
    <div className='About'>
        <br/><br/>
        <Box sx={{flexGrow:1}}>
            <Container>
                <Grid container spacing={2} style={{display:"flex" ,justifyContent:'space-around' ,alignItems:'center'}}>
                    <Grid lg={5} paddingLeft={2} style={{textAlign:'start'}}>
                     <Typography variant='h8' color="white" style={{fontFamily:'cormorant upright'}}>Contact</Typography><br/>
                     <Typography variant='h3' color="#DCCA87" marginTop={3} style={{fontFamily:'cormorant upright'}}>Find Us </Typography><br/>
                     <Typography variant='body-2' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}}> lane ends bungalow , whatcroft hall lane, rudheath,CW975G </Typography>
                     <Typography variant='h5' color="#DCCA87" marginTop={3} style={{fontFamily:'cormorant upright'}}>Opening  Hours  </Typography><br/>
                     <Typography variant='body-2' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}}> Mon--Fri : 10:00am-02:00am </Typography><br/><br/>
                     <Typography variant='body-2' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}}> Sat--Sun : 10:00am-03:00am  </Typography>

                    <Grid marginTop={4} marginBottom={2}>
                      <Button style={{backgroundColor:'#DCCA87',color:'black' ,fontFamily:'cormorant upright'}} >Visit us</Button>
                    </Grid>


                    </Grid>
                    <Grid lg={5}>
                        <img src={findus} alt="..." width={400} height={500}></img>
                        </Grid>
                </Grid>
            </Container>
        </Box>
    </div>
  )
}

export default Find