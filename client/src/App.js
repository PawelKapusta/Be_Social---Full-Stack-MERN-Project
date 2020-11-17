import React, {useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import beSocial from './images/be_social.png';
import {useDispatch} from "react-redux";
import {getPosts} from "./actions/posts";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from './styles';
import './index.css';
const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
   <Container maxWidth="lg">
     <AppBar className={classes.appBar} position="static" color="inherit">
       <Typography className={classes.heading} variant="h2" align="center">Be Social</Typography>
       <img className={classes.image} src={beSocial} alt="beSocial"/>
     </AppBar>
     <Grow in>
       <Container>
         <Grid container className={classes.mainSite} justify="space-between" alignItems="stretch" spacing={3}>
           <Grid item xs={12} sm={7}>
             <Posts setCurrentId={setCurrentId}/>
           </Grid>
           <Grid item xs={12} sm={4}>
             <Form currentId={currentId} setCurrentId={setCurrentId}/>
           </Grid>
         </Grid>
       </Container>
     </Grow>
   </Container>
  );
}

export default App;