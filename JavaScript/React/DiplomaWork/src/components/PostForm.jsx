import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions/postActions';
import { TextField, Button, Box } from '@mui/material';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (title.trim() && body.trim()) {
      const newPost = {
        id: Date.now(),
        title,
        body,
      };
      dispatch(addPost(newPost));
      setTitle('');
      setBody('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Body"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">Add Post</Button>
    </Box>
  );
};

export default PostForm;
