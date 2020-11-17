import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
  try {
    //retrieves all post from database
    const postMessages = await PostMessage.find();
    console.log(postMessages);
    //200 -> means everything is ok
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({message: error.message});
  }
}
export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    //201 -> successful creation
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
}

export const updatePost = async (req, res) => {
  const {id: _id} = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with given id: ${_id}`);

  const updatedPost  = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, {new: true});

  res.json(updatedPost);
}

export const deletePost = async (req, res) => {
  const {id: _id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with given id: ${_id}`);

  await PostMessage.findByIdAndRemove(_id);

  res.json({message: 'Post deleted successfully'});
}

export const likePost = async (req, res) => {
  const {id: _id} = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with given id: ${_id}`);

  const likePost = await PostMessage.findById(_id);
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, {likeCount: likePost.likeCount +1}, {new: true});

  res.json(updatedPost);
}