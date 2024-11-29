import React, { useState } from 'react';
import { Button, TextField, Box, Modal, Typography } from '@mui/material';

const EditPostForm = ({ post, onUpdate, open, handleClose }) => {
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedBody, setUpdatedBody] = useState(post.body);

  const handleUpdate = () => {
    const updatedPost = { ...post, title: updatedTitle, body: updatedBody };
    onUpdate(updatedPost);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-post-modal"
      aria-describedby="edit-post-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography style={{ marginBottom: '16px' }} variant="h6" id="edit-post-modal">
          Edit Post
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
          style={{ marginBottom: '16px' }}
        />
        <TextField
          label="Body"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          value={updatedBody}
          onChange={(e) => setUpdatedBody(e.target.value)}
        />
        <Button onClick={handleUpdate} variant="contained" sx={{ mt: 2 }}>
          Update Post
        </Button>
      </Box>
    </Modal>
  );
};

export default EditPostForm;
