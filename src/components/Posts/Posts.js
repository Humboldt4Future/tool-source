import React from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles.js';

const Posts = ({ currentId, setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {posts.map(post => (
                <Grid key={post._id} item xs={12} sm={12}>
                    <Post post={post} setCurrentId={setCurrentId}/>
                </Grid>
            ))}
        </Grid>
    );
}

export default Posts;