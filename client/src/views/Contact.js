import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PeopleIcon from '@material-ui/icons/People';
import Typography from '@material-ui/core/Typography';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DescriptionIcon from '@material-ui/icons/Description';
import SendIcon from '@material-ui/icons/Send';

const Column = styled.div`
  display: table-cell;
`;
const Row = styled.div`
  display: table;
  table-layout: fixed;
  border-spacing: 10px;
`;



const useStyles = makeStyles({
  main: {
    display: "flex",
    marginTop: 70,
    marginLeft: 60
  },
  root: {
    maxWidth: 300,
    marginBottom: 15,
    textAlign: "center",
    marginRight: 50,
    padding: 50,
    maxHeight: 190

  },
  root2: {
    minWidth: 600,
    marginBottom: 15,
    marginLeft: 300,
    fontSize: 25,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 21,
  },
  pos: {
    fontSize: 21,
    marginBottom: 12,
  },
  pos2: {
    fontSize: 19
  },
  form: {
    display: "flex",
    justifyContent: "center"
  }
});
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm("service_af822ej", "template_fu8i2zr", e.target, 'user_lRmyPZCVYEab9I4uMjRjU').then(
   (result) => {
     console.log(result.text);
   },
   (error) => {
     console.log(error.text);
   },
  );
  e.target.reset();
}

const Contact = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
   <div className={classes.main}>
     <Card className={classes.root}>
       <CardContent>
         <Typography className={classes.title} color="textSecondary" gutterBottom>
           Telephone contact:
         </Typography>
         <Typography variant="h5" component="h2">
           XXX{bull}XXX{bull}XXX
         </Typography>
         <br/>
         <Typography className={classes.pos} color="textSecondary">
           E-mail
         </Typography>
         <Typography variant="body2" component="p" className={classes.pos2}>
           pawelkapusta70@gmail.com
           <br/>
         </Typography>
       </CardContent>
     </Card>
     <Card className={classes.root2}>
       <CardContent className={classes.form}>
         <form className="contact-form" onSubmit={sendEmail}>
           <Row>
             <Column>
               <PeopleIcon/>

             </Column>
             <Column>
               <h2>Full Name</h2>
             </Column>
           </Row>
           <TextField
            id="outlined-secondary"
            label="Name"
            variant="outlined"
            color="primary"
            type="text"
            name="name"
            fullWidth={50}
           />
           <Row>
             <Column>
               <AlternateEmailIcon/>
             </Column>
             <Column>
               <h2>Email</h2>
             </Column>
           </Row>
           <TextField
            id="outlined-secondary"
            label="Email"
            variant="outlined"
            color="primary"
            type="email"
            name="email"
            fullWidth={50}
           />
           <Row>
             <Column>
               <DescriptionIcon/>
             </Column>
             <Column>
               <h2>Description</h2>
             </Column>
           </Row>
           <Column>
             <Row>
               <TextField
                id="filled-textarea"
                label="Message"
                placeholder="Message"
                multiline
                variant="filled"
                name="message"
                rows={10}
                type="text"
                style={{width: 350}}
               />
             </Row>
             <Row style={{display: "flex", justifyContent: "center"}}>
               <Button type="submit" value="Send" startIcon={<SendIcon/>} color="secondary" variant="contained" style={{marginTop: 10, width: 120, height: 40}}>
                 Send
               </Button>
             </Row>
           </Column>
         </form>
       </CardContent>
     </Card>


   </div>
  )

}


export default Contact;