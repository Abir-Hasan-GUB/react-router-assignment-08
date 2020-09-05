import React, { useEffect, useState } from 'react';
import FakeImage from '../FakeData/FakeData';
import './CommentBody.css'
const CommentBody = (props) => {
    const { name, email, body } = props.commentBody;
    const [image , setImage] = useState(FakeImage);

   
    return (
        <div className="commentBody">
            <div className="image">
               {
                   image.map(imag => <img src={imag.img} alt="profile picture" />)
               }
            </div>
            <div className="details">
                <h1>Name: {name}</h1>
                <h3>Email: {email}</h3>
                <p><span className="body">Body: </span> {body}</p>
            </div>
        </div>
    );
};

export default CommentBody;