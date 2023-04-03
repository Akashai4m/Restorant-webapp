import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import menu from "../images/menu.png";
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { color } from '@mui/system';


const useStyles = makeStyles({
    whiteBorder: {
      borderColor: '#fff !important',
    },
    whiteLabel: {
      color: '#fff',
    },
  });
  


function NewsLetter() {

    const classes = useStyles();


    const styles = theme => ({
        notchedOutline: {
          borderWidth: "1px",
          borderColor: "yellow !important"
        }
      });

  return (
    <div>
       <Box sx={{flexGrow:1}}>
        <br/> <br/> <br/> <br/>
        <Container>
            <Grid  container spacing={2} sx={{display:"block" ,justifyContent:"space-evenly",alignItems:"center"}}>
                <Typography variant='body-2' marginTop={3} color="white" style={{fontFamily:'cormorant upright'}}>Newsletter</Typography>
                <Typography variant='h2'  marginTop={3}  color="#DCCA87" style={{fontFamily:'cormorant upright'}}>Subscribe To Our Newsletter</Typography>
                <Typography variant='body-2'  marginTop={5}  color="white"style={{fontFamily:'cormorant upright'}}>And Never Miss Latest Updates</Typography>
                <Grid sx={{display:"flex" ,justifyContent:"center"}}  marginTop={3}  >
                <TextField id="outlined-basic"     InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }} label="Email Address" style={{borderColor:" white" ,width:"50%" ,marginRight:'20px' }} variant="outlined"  />
                    <Button variant='contained' style={{backgroundColor:'#DCCA87',color:'black' ,fontFamily:'cormorant upright'}} >Subscribe</Button>
                </Grid>
            </Grid>
        </Container>
        <br/> <br/>
       </Box>
    </div>
  )
}

export default NewsLetter