import React, { useEffect, useState } from 'react';
import CommentBody from '../CommentBody/CommentBody';
import './Comment.css';

const Comment = (props) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${props.id}/comments`;
        fetch(url)
            .then(response => response.json())
            .then(data => setComment(data))
    }, []);

    return (
        <div>
            <h1 className="comments">Comments:</h1>
            {
                comment.map(commentBody => <CommentBody commentBody={commentBody}></CommentBody>)
            }
        </div>
    );
};

export default Comment;