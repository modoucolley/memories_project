import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import useStyles from './styles';
import moment from 'moment';

import { deletePost, likePost } from "../../../actions/posts";

import { useDispatch } from "react-redux";


const Post = ({ post , setCurrentId }) => {

    const classes = useStyles();

    const dispatch = useDispatch()
    
    return (

        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

            <div className={classes.overlay} >
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>

            </div>

            <div className={classes.overlay2} > 
            <button style={{color:'white'}} 
                   size="small" onClick={()=> setCurrentId(post._id) } fullWidth>
                       <MoreHorizIcon fontSize='default'/>
                   </button>

            </div>

            <div className={classes.details} > 
            <Typography variant="body2" color="textSecondary" >{post.tags.map((tag)=>`#${tag} `)}</Typography>

            </div>
            <Typography className={classes.title} variant="h5" gutterBottom >{post.title}</Typography>
            <CardContent>
            <Typography  variant="h5" gutterBottom >{post.message}</Typography>
            </CardContent>
             
             <CardActions className={classes.cardActions} >
             <button variant="contained" color="primary" size="small" onClick={()=>dispatch(likePost(post._id))}>
             <ThumbUpAltIcon fontSize="small" />
             &nbsp; Like &nbsp;
                {post.likeCount}
             </button>

             <button variant="contained" color="primary" size="small" onClick={()=>dispatch(deletePost(post._id))} >
                <DeleteIcon fontSize='small'/>
                Delete
                
             </button>
             </CardActions>
        </Card>
    );
}

export default Post;