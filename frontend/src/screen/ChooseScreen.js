import React, { useContext } from "react";
import {Card, Box, Fade, Typography, CardMedia, CardContent,CardActionArea } from "@material-ui/core";
import Logo from "../components/Logo";
import { useStyles } from "../styles";
import { Store } from "../Store";
import { setOrderType } from "../actions";
function ChooseScreen(props) {
  const styles = useStyles();

  const {dispatch}=useContext(Store)

const chooseHandler =(orderType)=>{
setOrderType(dispatch,orderType)
props.history.push('/order')

}


  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large />
          <Typography
            variant="h3"
            component="h3"
            className={[styles.center]}
            gutterBottom
          >
            Where will you be eating today?
          </Typography>
<Box className={[styles.cards]}>

<Card className={[styles.cards,styles.space]}>
<CardActionArea onClick={()=>chooseHandler('Eat in')}>
<CardMedia
component='img'
alt='Eat in'
image='/images/eatin.png'
       className={styles.media}/>
<CardContent>
<Typography
gutterBottom
variant='h4'
color='textPrimary'
component='p'

>
  Eat In
</Typography>
</CardContent>

</CardActionArea>
 
</Card>
<Card className={[styles.cards,styles.space]}>
<CardActionArea onClick={()=>chooseHandler('Take out')}>
<CardMedia
component='img'
alt='Eat in'
image='/images/takeout.png'
       className={styles.media}/>
<CardContent>
<Typography
gutterBottom
variant='h4'
color='textPrimary'
component='p'

>
  Take out
</Typography>
</CardContent>

</CardActionArea>
 
</Card>


</Box>
        </Box>
      </Box>
    </Fade>
  );
}

export default ChooseScreen;
