import React, {useRef} from 'react';
import useStyles from './styles'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'; //like icon
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import moment from 'moment';
import {useDispatch, useSelector} from "react-redux";
import {deletePost, getPosts, likePost} from "../../../actions/posts";
import CircularProgress from "@material-ui/core/CircularProgress";
import EditIcon from '@material-ui/icons/Edit';


const Post = ({ post, setCurrentId, onlyShow }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const creators = useSelector((state) => state.users);
  const hashtags = post.Hashtags.split(",");
  const author = creators.find((user) => user.Id === post.UserId);
  const handleEditPost = (id) => {
    setCurrentId(id);
    window.scrollTo(0, 0);
  }
  const deleteHandler = () => {
    if (window.confirm('Are you sure to delete this post?')) {
      dispatch(deletePost(post.Id));
      window.location.reload(false);
    }
  }
  return (
   <Card className={classes.card}>
     <img src={post.Image} alt="postImage" height={180} width={!onlyShow ? 360 : 390}/>
     <div className={classes.overlay}>
       <Typography variant="h6">{author? author.FullName : <CircularProgress />}</Typography>
       <Typography variant="body2">{moment(post.DataPosted).fromNow()}</Typography>
     </div>
     {!onlyShow ?  <div className={classes.overlay2}>
       <Button style={{ color: 'white' }} size="small" onClick={() => handleEditPost(post.Id)} variant="contained"><EditIcon color="primary"/></Button>
     </div> : ""}
     <div className={classes.details}>
       <Typography variant="body2" color="textSecondary" component="h2">{hashtags ? hashtags.map((tag) => `#${tag.trim()} `) : <CircularProgress /> }</Typography>
     </div>
     <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.Title}</Typography>
     <CardContent>
       <Typography className={classes.description} variant="body2" color="textSecondary" component="p">{post.Description}</Typography>
     </CardContent>
     <CardActions className={classes.cardActions}>
       <Button size="small" color="primary" onClick={() => {dispatch(likePost(post.Id)); window.location.reload(false)}}><ThumbUpAltIcon fontSize="small" />
       &nbsp;Like&nbsp; {post.Likes} </Button>
       <Button size="small" color="primary" onClick={deleteHandler}><DeleteOutlineIcon fontSize="small" />
       Delete</Button>
     </CardActions>
   </Card>
  );
};

export default Post;