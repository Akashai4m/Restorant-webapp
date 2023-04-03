import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import menu from "../images/menu.png";

function Today() {
  return (
    <div>
         <Box sx={{flexGrow:1 ,backgroundColor:"#000"}}>
            <Container style={{fontFamily:'cormorant upright'}}>
            <br/><br/>
                <Grid sx={{display:"block" ,justifyContent:"center"}}>
                        <Typography variant='h8' color="white" style={{fontFamily:'cormorant upright'}}>Menu That Fits You Palatte</Typography><br/><br/>
                        <Typography variant='h3' color="#DCCA87"style={{fontFamily:'cormorant upright'}}>Today's Special</Typography>
                    </Grid>
                    <br/><br/>
                <Grid container spacing={2} sx={{display:"flex",justifyContent:"space-evenly" ,alignItems:'center'}}>
                <Grid lg={4} style={{textAlign:"start"}} >
                    <Grid sx={{display:"flex" ,justifyContent:"center"}}>
                        <Typography variant='h4' color="white" style={{fontFamily:'cormorant upright'}}>Wine & Beer</Typography>
                    </Grid>
                    <Grid marginTop={3}>
                    <Typography marginTop={3} variant='h6' color="white" style={{fontFamily:'cormorant upright'}}><span style={{color:"#DCCA87"}}>Chapel Hill Shiraz</span>  -------------------  $56</Typography> 
                    <Typography marginTop={2} variant='body-2' color="white">AU | Bottle</Typography>
                    <Typography marginTop={3} variant='h6' color="white" style={{fontFamily:'cormorant upright'}}><span style={{color:"#DCCA87"}}>Catena Malbee</span>  -------------------  $59</Typography> 
                    <Typography marginTop={2} variant='body-2' color="white">AR | Bottle</Typography>
                    <Typography marginTop={3} variant='h6' color="white" style={{fontFamily:'cormorant upright'}}><span style={{color:"#DCCA87"}}>La Vieille Rose</span>   -------------------  $44</Typography> 
                    <Typography marginTop={2} variant='body-2' color="white">FR | 750 ml</Typography>
                    <Typography marginTop={3} variant='h6' color="white" style={{fontFamily:'cormorant upright'}}><span style={{color:"#DCCA87"}}>Rhino Pale Ale</span>  -------------------  $31</Typography> 
                    <Typography marginTop={2} variant='body-2' color="white">CA | 750 ml</Typography>
                    <Typography marginTop={3} variant='h6' color="white" style={{fontFamily:'cormorant upright'}}><span style={{color:"#DCCA87"}}>Irish Guinness</span>  -------------------  $26</Typography> 
                    <Typography marginTop={2} variant='body-2' color="white">IE | 750 ml</Typography>
                   
                   
                           
                        </Grid>
                </Grid>
          <Grid lg={3} >
                    <img src={menu} width={256} height={430} alt="..."></img>
                   
                    
             </Grid> 
            <Grid lg={4} style={{textAlign:"start"}}>
            <Grid sx={{display:"flex" ,justifyContent:"center"}}>
                        <Typography variant='h4' color="white" style={{fontFamily:'cormorant upright'}}>Cocktails</Typography>
                    </Grid>
                    <Grid marginTop={3}>
                    <Typography marginTop={3} variant='h6' color="white" style={{fontFamily:'cormorant upright'}}><span style={{color:"#DCCA87"}}> Aperol Spritz</span>  -------------------  $56</Typography> 
                    <Typography marginTop={2} variant='body-2' color="white">AU | Bottle</Typography>
                    <Typography marginTop={3} variant='h6' color="white" style={{fontFamily:'cormorant upright'}}><span style={{color:"#DCCA87"}}>Dark N Stormy</span>  -------------------  $59</Typography> 
                    <Typography marginTop={2} variant='body-2' color="white">AR | Bottle</Typography>
                    <Typography marginTop={3} variant='h6' color="white" style={{fontFamily:'cormorant upright'}}><span style={{color:"#DCCA87"}}>Daiquiri</span>   ------------------------------  $44</Typography> 
                    <Typography marginTop={2} variant='body-2' color="white">FR | 750 ml</Typography>
                    <Typography marginTop={3} variant='h6' color="white" style={{fontFamily:'cormorant upright'}}><span style={{color:"#DCCA87"}}>Old Fashioned </span> -------------------  $31</Typography> 
                    <Typography marginTop={2} variant='body-2' color="white">CA | 750 ml</Typography>
                    <Typography marginTop={3} variant='h6' color="white" style={{fontFamily:'cormorant upright'}}><span style={{color:"#DCCA87"}}>Negroni</span>  ---------------------------  $26</Typography> 
                    <Typography marginTop={2} variant='body-2' color="white">IE | 750 ml</Typography>
                   
                   
                           
                        </Grid>
         </Grid>
                </Grid>
                <br/><br/><br/>
                <Grid sx={{display:"flex" ,justifyContent:"center"}}>
                        <Button variant='contained' style={{backgroundColor:'#DCCA87',color:'black' ,fontFamily:'cormorant upright'}}>View More</Button>
                    </Grid>
            </Container>
         </Box>
    </div>
  )
}

export default Today