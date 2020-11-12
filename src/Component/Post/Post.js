import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css';
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
    const {title, body, userId, id} = props.post;
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="p" component="p">
            <h3 className="card-title">User No: {id}</h3>
            {title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          <Link to={"/detail/"+id}>See More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
