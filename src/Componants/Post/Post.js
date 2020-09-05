import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css'
import { Link } from 'react-router-dom';
const Post = (props) => {

    const {title,id} = props.post;
 console.log(props);
    return (
        <div className = "singlePostBody">
           
        <Card>
  <CardActionArea>
   
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2" className = "name">
       <span className = "title">Title:</span>  {title}
       {/* <Link to={`/about/${id}`}>About</Link> */}
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Link to={`/post/${id}`}>
    <Button className="button" variant="contained" color="primary" href="#contained-buttons">
Read More
</Button>
    </Link>
  </CardActions>
</Card>
    </div>
    );
};

export default Post;