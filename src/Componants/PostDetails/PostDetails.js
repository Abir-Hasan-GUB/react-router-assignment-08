import React, { useEffect, useState } from 'react';
import './PostDetails.css'
import { useParams } from 'react-router-dom';
import './PostDetails.css'
import Comment from '../Commetn/Comment';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setPost(data));
    }, []);
    const { title, body } = post;

    return (
        <div className="postDetails">
            <h1 className="detailsHeadline">... Post Details ...</h1>
            <h1> <span className="title2">Title : </span> {title}</h1>
            <p> <span className="body">Body: </span> {body}</p>
            <Comment id={id}></Comment>
        </div>
    );
};

export default PostDetails;