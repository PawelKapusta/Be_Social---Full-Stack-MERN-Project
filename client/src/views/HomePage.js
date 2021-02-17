import React, {Component, useEffect} from 'react';
import {getUsers} from "../actions/users";
import {useDispatch} from "react-redux";
import {getPosts} from "../actions/posts";

const HomePage = () => {
  const dispatch = useDispatch();
  const getUSERS = () => {
    dispatch(getUsers());
  }
  useEffect(() => {
    dispatch(getPosts());
    getUSERS();
  },[dispatch] );

  return (
     <div>
       <h1>Home Page</h1>
     </div>
    );

}

export default HomePage;