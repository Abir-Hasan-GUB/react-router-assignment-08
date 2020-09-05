import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css'
const Post = (props) => {

    const {title} = props.post;
 console.log(props);
    return (
        <div className = "singlePostBody">
           
        <Card>
  <CardActionArea>
   
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2" className = "name">
       <span className = "title">Title:</span>  {title}
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
    <Button className="button" variant="contained" color="primary" href="#contained-buttons">
Read More
</Button>
  </CardActions>
</Card>
    </div>
    );
};

export default Post;