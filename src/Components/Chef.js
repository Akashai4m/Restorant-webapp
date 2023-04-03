import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import chef from "../images/chef.png";
import quote from "../images/quote.png";
import sign from "../images/sign.png";
import video from "../images/meal.mp4";




function Chef() {
  return (
    <div className='About'>
        <br/><br/><br/><br/>
        <Box sx={{flexGrow:1}} >
            <Container>
                <Grid container spacing={2} sx={{display:"flex" ,justifyContent:"space-around" ,alignItems:"center"}}>
                    <Grid lg={5}>
                      <img src={chef} alt="fgkgm" width={400} height={500}></img>
                    </Grid>
                    <Grid lg={5} sx={{textAlign:"start"}} paddingLeft={2}>
                        <Typography marginTop={3} variant='h8' color="white" style={{fontFamily:'cormorant upright'}}>Chef's Word</Typography>
                        <Typography marginTop={3} variant='h3' color="#DCCA87"style={{fontFamily:'cormorant upright'}} >What We Believe In</Typography>
                        <Typography marginTop={6} variant='body-2' color="white" style={{fontFamily:'cormorant upright'}}><span><img src={quote} width={47} height={40}></img></span >lorem ipsum dolor sit amet ,consectetrur elit auctor sit.auctor sit iaculis in arcu. vulputate nulla labortis mauris egges sit. nulla scelerisque congue ac consequebn , aliquam molestie lectus eu. congue iaculis integer curabitor sempperb sit numc</Typography>
                        <br/><br/><br/>
                        <Typography variant='h5' color="#DCCA87" style={{fontFamily:'cormorant upright'}}>Kevin Luo</Typography><br/><br/>
                        <Typography variant='h7' color="white" style={{fontFamily:'cormorant upright'}}>Chef & Founder</Typography><br/><br/><br/>
                        <Grid>
                            <img src={sign} width={200} alt='...' height={100}></img>
                        </Grid>
                        </Grid>

                </Grid>
            </Container>
        </Box>
        <br/><br/>
        <Box>
        {/* <video controls width="100%" height="5%" 
          poster={require('../images/table.jpg')}
          src={video}  type="video/webm" >
      
     </video> */}
     <br/><br/>
        </Box>
        <br/><br/>
    </div>
  )
}

export default Chef