// src/components/PostList.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest, deletePost } from '../redux/actions/postActions';
import { updatePost } from '../redux/actions/updatePostActions'; // Импортируем экшен
import { Box, List, ListItem, ListItemText, IconButton, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditPostForm from './EditPostForm';  // Импортируем компонент формы редактирования
import Loader from './Loader';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [editingPost, setEditingPost] = useState(null); // Хранение редактируемого поста
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    if (storedPosts.length > 0) {
      dispatch({ type: 'LOAD_POSTS_FROM_LOCAL_STORAGE', payload: storedPosts });
    } else {
      dispatch(fetchPostsRequest(10));  // Запрашиваем посты с API
    }
  }, [dispatch]);

  const handleDelete = (postId) => {
    dispatch(deletePost(postId)); // Удаляем пост
  };

  const handleEdit = (post) => {
    setEditingPost(post); // Включаем режим редактирования
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = (updatedData) => {
    dispatch(updatePost(updatedData));  // Диспатчим обновленный пост
    const updatedPosts = posts.map((post) =>
      post.id === updatedData.id ? updatedData : post
    );
    localStorage.setItem('posts', JSON.stringify(updatedPosts));  // Сохраняем обновленный список в localStorage
    dispatch({ type: 'LOAD_POSTS_FROM_LOCAL_STORAGE', payload: updatedPosts });
    setEditingPost(null);  // Закрываем форму редактирования
  };
  


  if (loading) return <Loader />;
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
            <Button onClick={() => handleEdit(post)}>Edit</Button>  {/* Кнопка редактирования */}
          </ListItem>
        ))}
      </List>

      {editingPost && (
        <EditPostForm 
          post={editingPost} 
          onUpdate={handleUpdate}
          open={open}
          handleClose={handleClose}
        />
      )}
    </Box>
  );
};

export default PostList;
