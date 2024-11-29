import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest, deletePost } from '../redux/actions/postActions';
import { Box, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    if (storedPosts.length > 0) {
      dispatch({ type: 'LOAD_POSTS_FROM_LOCAL_STORAGE', payload: storedPosts });
    } else {
      dispatch(fetchPostsRequest(10)); // Запрашиваем посты с API
    }
  }, [dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId)); // Удаление поста
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText primary={post.title} secondary={post.body} />
            <IconButton onClick={() => handleDelete(post.id)} color="secondary">
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default PostList;
