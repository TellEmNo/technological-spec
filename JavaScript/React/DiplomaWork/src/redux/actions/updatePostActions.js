// src/redux/actions/updatePostActions.js
export const updatePostRequest = (postId, updatedData) => {
  return {
    type: 'UPDATE_POST_REQUEST',
    payload: { postId, updatedData },  // Отправляем ID поста и обновленные данные
  };
};

export const updatePost = (updatedPost) => {  // Тип UPDATE_POST будет обновлять данные
  return {
    type: 'UPDATE_POST',
    payload: updatedPost,  // Отправляем обновленный пост
  };
};

export const updatePostFailure = (error) => {
  return {
    type: 'UPDATE_POST_FAILURE',
    payload: error,  // Ошибка, если что-то пошло не так
  };
};
