import React, {Component, useEffect, useState} from 'react';
import {Container, Grid, Grow} from "@material-ui/core";
import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form";
import {useDispatch} from "react-redux";
import useStyles from "../styles";
import {getPosts} from "../actions/posts";
import {getUsers} from "../actions/users";

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

  return (
     <div style={{marginTop: "3%"}}>
       <Container maxWidth="lg">
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
     </div>
    );

}

export default PostsScreen;