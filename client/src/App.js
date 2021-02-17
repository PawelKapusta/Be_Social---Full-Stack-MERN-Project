import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {routes} from "./routers/routes";
import './index.css';
import HomePage from "./views/HomePage";
import PostsScreen from "./views/PostsScreen";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import New from './views/New';
import Contact from "./views/Contact";
import Popular from "./views/Popular";
import {UsersProvider} from "./context/UsersContext";
import Settings from "./views/settings";
const App = () => {

  return (

   <BrowserRouter>
     <>
       <UsersProvider>
       <MainNavbar/>
     <Switch>
       <Route exact path={routes.home} component={HomePage}/>
       <Route exact path={routes.posts} component={PostsScreen}/>
       <Route exact path={routes.newPosts} component={New}/>
       <Route exact path={routes.popularPosts} component={Popular}/>
       <Route exact path={routes.contact} component={Contact}/>
       <Route exact path={routes.settings} component={Settings}/>
     </Switch>
       </UsersProvider>
       </>
   </BrowserRouter>

  );
}

export default App;