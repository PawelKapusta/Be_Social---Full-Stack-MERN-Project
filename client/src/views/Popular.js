import React, {Component, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
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
    const posts = useSelector((state) => state.posts).sort((a,b) => b.Likes - a.Likes).slice(0,6);
    const { v4: uuidv4 } = require('uuid');
    return (
     <div style={{marginLeft: 180}}>{
     !posts.length ? <CircularProgress /> : (
      <Grid  container  alignItems="center" spacing={6} lg style={{marginTop: 50}} >
        {posts?.map((post) => (
         <Grid key={uuidv4()} item xs={12} sm={4} md={4} container>
           <Post post={post} onlyShow={true}/>
         </Grid>
        ))}
      </Grid>
     )}
     </div>
    );
}

export default Popular;