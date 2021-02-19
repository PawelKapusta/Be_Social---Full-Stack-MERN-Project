import React, {Component, useEffect} from 'react';
import {getUsers} from "../actions/users";
import {useDispatch} from "react-redux";
import {getPosts} from "../actions/posts";
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
     <div style={{display: 'flex', justifyContent: 'space-around', background: "white", height: "100vh", marginTop: "6px" ,boxShadow: '3px 3px 5px 6px #ccc', textAlign: "center"}}>
       <section style={{width: "30%"}}>
         <div style={{marginTop: "50%", fontSize: "35px", letterSpacing: 4.3, lineHeight: 1.1}}>
           Application used for posting your expressions, thoughts or memories. Allows users to edit, upload photos and add a caption to each post. All posts are shared with other users.
         </div>
       </section>
       <section className="girlPhoto">

       </section>
     </div>
    );

}

export default HomePage;