import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest, deletePost } from '../redux/actions/postActions';
import { updatePost, updatePostRequest } from '../redux/actions/updatePostActions'; // Импортируем экшены для саги и thunk
import { Box, List, ListItem, ListItemText, IconButton, Typography, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditPostForm from './EditPostForm';
import Loader from './Loader';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);
  const [editingPost, setEditingPost] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    if (storedPosts.length > 0) {
      // В Saga мы могли бы использовать сагу для загрузки постов из LocalStorage
      // В случае с Redux Thunk мы сразу диспатчим экшен с данными из LocalStorage
      dispatch({ type: 'LOAD_POSTS_FROM_LOCAL_STORAGE', payload: storedPosts });
    } else {
      // Если данных нет в localStorage, то мы вызываем асинхронную функцию через Thunk
      // Вариант с Redux Thunk: асинхронная функция выполняет запрос и диспатчит экшены
      dispatch(fetchPostsRequest(10)); // Это вызывает асинхронную функцию для получения постов
      // В Redux Saga для такого же запроса использовался бы генератор с takeEvery
    }
  }, [dispatch]);

  const handleDelete = (postId) => {
    // В Redux Thunk: мы диспатчим экшен, который в свою очередь выполняет асинхронную операцию
    dispatch(deletePost(postId));  // Удаляем пост с помощью Thunk, асинхронная операция внутри экшена
    // В Redux Saga: мы диспатчим экшен, и саги слушают этот экшен, выполняя асинхронную операцию
    // В таком случае, удаление поста происходило бы через сагу, которая делала бы API-запрос
    // В Saga мы бы использовали генератор для удаления поста
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = (updatedData) => {
    // Вариант с Redux Thunk:
    // dispatch(updatePost(updatedData));  // Диспатчим обновленный пост, используя thunk (экшен `updatePost`)

    // Вариант с Redux Saga:
    dispatch(updatePostRequest(updatedData.id, updatedData));  // Диспатчим updatePostRequest для саги
    const updatedPosts = posts.map((post) =>
      post.id === updatedData.id ? updatedData : post
    );
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    dispatch({ type: 'LOAD_POSTS_FROM_LOCAL_STORAGE', payload: updatedPosts });
    setEditingPost(null);
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
            <Button onClick={() => handleEdit(post)}>Edit</Button>
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
