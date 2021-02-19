import React, { useEffect, useState} from 'react';
import {Container, Grid, Grow} from "@material-ui/core";
import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form";
import {useDispatch} from "react-redux";
import useStyles from "../styles";
import {getPosts} from "../actions/posts";
import {getUsers} from "../actions/users";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const PostsScreen = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const getUSERS = () => {
    dispatch(getUsers());
  }
  useEffect(() => {
    dispatch(getPosts());
    getUSERS();
  },[dispatch] );
  const handleScrollUp = () => {
    window.scrollTo(0, 0);
  }
  const handleScrollDown = () => {
    window.scrollTo(0,document.body.scrollHeight);
  }

  return (

     <div style={{marginTop: "3%",  minHeight: '100vh', height: '2500px',
       position: 'relative'}}>
       <Container maxWidth>
         <Grow in>
           <Container style={{marginLeft: 260}}>
             <Grid container className={classes.mainSite} justify="space-between" alignItems="stretch" spacing={8}>
               <Grid item xs={12} sm={7}>
                 <Posts setCurrentId={setCurrentId}/>
               </Grid>
               <Grid item xs={6} sm={5}>
                 <Form currentId={currentId} setCurrentId={setCurrentId}/>
               </Grid>
             </Grid>
           </Container>
         </Grow>
       </Container>
       <Tooltip title={<h1 style={{ fontSize: '14px', lineHeight: 1.6 }}>Scroll Up</h1>} placement="top">
         <Button variant="contained" style={{position: "fixed", bottom: 15, right: 90,  height: 50, width: 70}} color="secondary" onClick={handleScrollUp}>
           <ArrowUpwardIcon />
         </Button>
       </Tooltip>
       <Tooltip title={<h1 style={{ fontSize: '14px', lineHeight: 1.6 }}>Scroll Down</h1>} placement="top">
         <Button variant="contained" style={{position: "fixed", bottom: 15, right: 15, height: 50, width: 70}} color="primary" onClick={handleScrollDown}>
           <ArrowDownwardIcon />
         </Button>
       </Tooltip>
     </div>
    );

}

export default PostsScreen;