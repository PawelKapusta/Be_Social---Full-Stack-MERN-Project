"use strict"
import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import styled from "styled-components";
import {createPost, updatePost} from "../../actions/posts";
import users from "../../reducers/users";

const Column = styled.div`
  display: table-cell;
`;
const Row = styled.div`
  display: table;
  table-layout: fixed;
  border-spacing: 10px;
`;


const Form = ({currentId, setCurrentId}) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', image: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message.Id === currentId) : null));
  const autors = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (post){
        (async function anyNameFunction() {
          await setPostData({creator: autors.filter((user) => user.Id === post.UserId)[0].FullName, title: post.Title, message: post.Description, image: post.Image, tags: post.Hashtags});
        })();
    }
  }, [post]);

  const clear = () => {
    setCurrentId(null);
    setPostData({ creator: '', title: '', message: '', tags: '', image: '' });
  };
  const handleSubmit =   (e) => {
    //e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  return (
   <Paper className={classes.paper}>
     <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
       <Column>
         <Row>
           <Typography style={{marginLeft: 60}} variant="h5">{currentId ? `Editing "${post.Title}"` : 'Creating a Memory'}</Typography>
         </Row>
         <Row>
           <Column >
             <label style={{fontSize: 24}}><b>Autor</b></label>
           </Column>
           <Column>
             <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              variant="outlined"
              onClose={handleClose}
              onOpen={handleOpen}
              value={postData.creator}
              onChange={(e) => setPostData({...postData, creator: e.target.value})}
              style={{minWidth: 260}}
             >
               <MenuItem value="" disabled selected>
                 <em>Select autor of a post</em>
               </MenuItem>
               {autors.map((autor) =>
                <MenuItem value={autor.FullName} key={autor.Id}>{autor.FullName}</MenuItem>
               )}
             </Select>
           </Column>

         </Row>
       </Column>
       <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}
                  onChange={(e) => setPostData({...postData, title: e.target.value})}/>
       <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message}  rows={4} multiline
                  onChange={(e) => setPostData({...postData, message: e.target.value})}/>
       <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags}
                  onChange={(e) => setPostData({...postData, tags: e.target.value.split(',').toString()})}/>
       <TextField name="image" variant="outlined" label="Image link" fullWidth value={postData.image}
                  onChange={(e) => setPostData({...postData, image: e.target.value})}/>
       <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit"
               fullWidth>Submit</Button>
       <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
     </form>
   </Paper>
  )
}

export default Form;