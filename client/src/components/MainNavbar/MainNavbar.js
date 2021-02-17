import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SettingsIcon from '@material-ui/icons/Settings';

import {
  Nav,
  NavMenu,
  NavBtn,

  NavLink,
  Bars,

} from './NavElements';
import logo from "../../images/logo.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,

  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
  listItemText: {
    fontSize: '16px',
  },
}));

const MainNavbar = () => {
  const classes = useStyles();

  return (

     <Nav>
       <NavMenu>
         <NavLink to="/">
           <img className={classes.image} src={logo} alt="beSocial" width="220px"/>
         </NavLink>
         <Bars/>
         <NavBtn>
           <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<HomeIcon/>}
            size="large"
           >
             <NavLink to="/">Home</NavLink>
           </Button>
         </NavBtn>
         <NavBtn><Button variant="contained" color="primary" startIcon={<EmailOutlinedIcon/>} size="small">
           <NavLink to="/posts">All</NavLink>
         </Button></NavBtn>
         <NavBtn><Button variant="contained" color="primary" startIcon={<TrendingUpIcon/>} size="small">
           <NavLink to="/popular">Popular</NavLink>
         </Button></NavBtn>
         <NavBtn><Button variant="contained" color="primary" startIcon={<FiberNewIcon/>} size="small">
           <NavLink to="/new">New </NavLink>
         </Button></NavBtn>
         <NavBtn>
           <Button variant="contained"  startIcon={<ContactMailIcon/>} color="default" size="small">
             <NavLink to="/contact">Contact</NavLink>
           </Button>
         </NavBtn>
         <NavBtn>
           <Button startIcon ={<SettingsIcon/>} color={"secondary"} variant="contained" style={{width: "95%"}}>
             <NavLink to="/settings">Settings</NavLink>
           </Button>
         </NavBtn>

       </NavMenu>
     </Nav>

  );
};

export default MainNavbar;