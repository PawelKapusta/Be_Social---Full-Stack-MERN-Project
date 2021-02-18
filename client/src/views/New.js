import React, {Component, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../actions/users";
import {getPosts} from "../actions/posts";
import {CircularProgress, Grid} from "@material-ui/core";
import Post from "../components/Posts/Post/Post";
import moment from "moment";

const New = () =>  {
  const dispatch = useDispatch();
  const getUSERS = () => {
    dispatch(getUsers());
  }
  useEffect(() => {
    dispatch(getPosts());
    getUSERS();
  },[dispatch] );
  const posts = useSelector((state) => state.posts).sort((a,b) => moment(b.DataPosted) - moment(a.DataPosted)).slice(0,4);
  const { v4: uuidv4 } = require('uuid');
  return (
   <div style={{marginLeft: 80}}>
     {
       !posts.length ? <CircularProgress /> : (
        <Grid container  alignItems="center" spacing={6} lg style={{marginTop: 150}}>
          {posts?.map((post) => (
           <Grid key={uuidv4()} item xs={12} sm={3} md={3} container>
             <Post post={post} onlyShow={true}/>
           </Grid>
          ))}
        </Grid>
       )
     }
   </div>

  );
}

export default New;