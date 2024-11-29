export const updatePostRequest = (postId, updatedData) => {
  return {
    type: 'UPDATE_POST_REQUEST',
    payload: { postId, updatedData },
  };
};

export const updatePost = (updatedPost) => {
  return {
    type: 'UPDATE_POST',
    payload: updatedPost,
  };
};

export const updatePostFailure = (error) => {
  return {
    type: 'UPDATE_POST_FAILURE',
    payload: error,
  };
};
