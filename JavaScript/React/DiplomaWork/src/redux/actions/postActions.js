import axios from 'axios';

// В Thunk ошибки обрабатываются внутри асинхронной функции с помощью try-catch
export const fetchPostsRequest = (limit = 10) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      dispatch(fetchPostsFailure(error.message));
    }
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: { posts },
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: error,
  };
};

export const deletePost = (postId) => {
  return {
    type: 'DELETE_POST',
    payload: postId,
  };
};

export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    payload: post,
  };
};
