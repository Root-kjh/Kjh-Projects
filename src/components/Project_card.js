import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function Project_card(props) {
  return (
    <Card className="project">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography color="textSecondary">
          {props.backend} | {props.db}
        </Typography>
        <Typography variant="body2" component="p">
          {props.etc}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.link}><Button size="small">View</Button></a>
      </CardActions>
    </Card>
  );
}