import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import laurels from "../images/laurels.png";
import award01 from "../images/award01.png";
import awrd02 from "../images/award02.png";
import award03 from "../images/award03.png";
import award05 from "../images/award05.png";
import logo from "../images/logo.png";




function Laurels() {
  return (
    <div className='About'>
          <Box>
          <Grid sx={{display:"flex" ,alignSelf:"flex-start" ,marginLeft:"20px"}}>
                    <img src={logo} alt="...." width={78} height={78}></img>
                </Grid>
            <Container>
               
                <Grid container spacing={2} sx={{display:"flex" ,justifyContent:"space-around" ,alignItems:"center"}}>
                    <Grid lg={8} sx={{textAlign:"start"}} >
                        <Typography variant='h7' color="white" marginTop={3} style={{fontFamily:'cormorant upright'}}>Awards & Recognition</Typography> 
                        <Typography variant='h3' color="#DCCA87" marginTop={3} style={{fontFamily:'cormorant upright'}}>Our Laurels</Typography> 
                        <Grid marginTop={5}  marginBottom={2} sx={{display:"flex" ,justifyContent:"space-around" ,flexWrap:"wrap"}} >
                            <Grid marginTop={2} sx={{display:"flex" ,alignItems:"center" ,justifyContent:"space-between" }}>
                               <img src={awrd02} width={48} height={48} alt="..."></img>
                               <Grid marginTop={2} sx={{display:"grid" ,textAlign:'start'}} marginLeft={2}>
                                <Typography color="#DCCA87" variant='h6' marginTop={2} style={{fontFamily:'cormorant upright'}}>Bib Gourmond</Typography>
                                <Typography marginTop={2} variant='body-2' color="white" style={{fontFamily:'cormorant upright'}}>Lorem ipsum dolor sit amet ,consector</Typography>
                               </Grid>
                            </Grid>
                            <Grid marginTop={2} sx={{display:"flex" ,alignItems:"center"}}>
                            <img src={award01} width={48} height={48} alt="..."></img>
                            <Grid marginTop={2} sx={{display:"grid" ,textAlign:'start'}} marginLeft={2}>
                                <Typography color="#DCCA87" variant='h6' marginTop={2} style={{fontFamily:'cormorant upright'}}>Rising Star </Typography>
                                <Typography marginTop={2} variant='body-2' color="white" style={{fontFamily:'cormorant upright'}}>Lorem ipsum dolor sit amet ,consector</Typography>
                               </Grid>
                            </Grid>
                            <Grid marginTop={2} sx={{display:"flex" ,alignItems:"center"}}>
                            <img src={award05} width={48} height={48} alt="..."></img>
                            <Grid marginTop={2} sx={{display:"grid" ,textAlign:'start'}} marginLeft={2}>
                                <Typography color="#DCCA87" variant='h6' marginTop={2} style={{fontFamily:'cormorant upright'}}>AA Hospitality</Typography>
                                <Typography marginTop={2} variant='body-2' color="white" style={{fontFamily:'cormorant upright'}}>Lorem ipsum dolor sit amet ,consector</Typography>
                               </Grid>
                            </Grid>
                            <Grid marginTop={2} sx={{display:"flex" ,alignItems:"center" ,justifyContent:"space-evenly"}}>
                            <img src={award03} width={48} height={48} alt="..."></img>
                            <Grid marginTop={2} sx={{display:"grid" ,textAlign:'start'}} marginLeft={2}>
                                <Typography color="#DCCA87" variant='h6' marginTop={2} style={{fontFamily:'cormorant upright'}}>Outstanding Chef</Typography>
                                <Typography marginTop={2} variant='body-2' color="white" style={{fontFamily:'cormorant upright'}}>Lorem ipsum dolor sit amet ,consector</Typography>
                               </Grid>
                            </Grid>
                        </Grid>  
                    </Grid>

                    <Grid lg={4} >
                        <img src={laurels} alt="..." width={400} height={450}></img>
                        </Grid>
                </Grid>
            </Container>
          </Box>
    </div>
  )
}

export default Laurels