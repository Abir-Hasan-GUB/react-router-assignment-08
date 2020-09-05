import React, { useState, useEffect } from 'react';
import Post from './Componants/Post/Post';
import Header from './Componants/Header/Header';



function App() {
  const [post,SetPost] = useState([]);
    useEffect(()=> {
        fetch ('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => SetPost(data))
    },[])
  return (
    
  <div>
    <Header></Header>
    {
      post.map(singlePost => <Post singlePost={singlePost}></Post>)
    }
    
  </div>
  )
  }

export default App;
