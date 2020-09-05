import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
  const [post , setPost] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setPost(data))
  },[])
  return (
    <div>
      {
        post.map(post => <Post post = {post}></Post>)
      }
    </div>
  );
};

export default Home;