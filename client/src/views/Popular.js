import React, {Component, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import useStyles from "../components/Posts/styles";
import {CircularProgress, Grid} from "@material-ui/core";
import Post from "../components/Posts/Post/Post";
import {getUsers} from "../actions/users";
import {getPosts} from "../actions/posts";

const  Popular =  ()  => {
  const dispatch = useDispatch();
  const getUSERS = () => {
    dispatch(getUsers());
  }
  useEffect(() => {
    dispatch(getPosts());
    getUSERS();
  },[dispatch] );
    const posts = useSelector((state) => state.posts).sort((a,b) => b.Likes - a.Likes).slice(0,5);
    const classes = useStyles();
    const { v4: uuidv4 } = require('uuid');
    return (
     !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts?.map((post) => (
         <Grid key={uuidv4()} item xs={12} sm={4} md={4}>
           <Post post={post} />
         </Grid>
        ))}
      </Grid>
     )
    );
}

export default Popular;