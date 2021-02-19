import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const PostsContext = createContext({ posts: [], setPosts: () => {} });

export const PostsProvider = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get('http://localhost:5000/posts');
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
   <PostsContext.Provider value={{ posts, setPosts }}>
     {props.children}
   </PostsContext.Provider>
  );
};

export default PostsContext;