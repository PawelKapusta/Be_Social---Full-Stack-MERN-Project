import axios from 'axios';


const url = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${url}/posts`);
export const fetchUsers = () => axios.get(`${url}/users`);
export const getUser = (id) => axios.get(`${url}/users/${id}`);
export const createUser = (user) => axios.post(`${url}/users`,user, { headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }});
export const createPost =  (newPost) =>  axios.post(`${url}/posts`, newPost, {
    headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}).then(response => console.log("create post response", response)).catch(error => console.log("create post error", error));

export const updatePost = (id, updatedPost) => axios.patch(`${url}/updatePost/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/likePost/${id}`);