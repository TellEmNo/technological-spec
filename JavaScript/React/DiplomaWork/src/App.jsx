import React from 'react';
import { Container, Typography } from '@mui/material';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Posts</Typography>
      <PostForm />
      <PostList />
    </Container>
  );
};

export default App;
