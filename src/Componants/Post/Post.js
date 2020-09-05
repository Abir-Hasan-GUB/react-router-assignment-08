import React, {} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css'

const Post = (props) => {
    // console.log(props)
    const {name,email} = props.singlePost;
    return (
        <div className = "singlePostBody">
           
            <Card>
      <CardActionArea>
        <CardMedia
         
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className = "name">
            Name: {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Email: {email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary" href="#contained-buttons">
 Read More
</Button>
      </CardActions>
    </Card>
        </div>
    );
};

export default Post;