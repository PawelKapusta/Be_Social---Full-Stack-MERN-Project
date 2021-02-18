import React, {Component, useEffect} from 'react';
import {getUsers} from "../actions/users";
import {useDispatch} from "react-redux";
import {getPosts} from "../actions/posts";
import socialImage from '../images/homePosts.png';
import styled from 'styled-components';
import '../css/homePage.css';

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
     <div style={{display: 'flex', justifyContent: 'space-around', background: "white", height: "100vh", marginTop: "6px" ,boxShadow: '3px 3px 5px 6px #ccc'}}>
       <section>
         Description
       </section>
       <section className="girlPhoto">

       </section>
     </div>
    );

}

export default HomePage;