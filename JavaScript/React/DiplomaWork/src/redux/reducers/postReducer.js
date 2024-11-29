const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        loading: false,
        posts: action.payload.posts,
      };
    case 'FETCH_POSTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'DELETE_POST':
      const updatedPostsAfterDelete = state.posts.filter(post => post.id !== action.payload);
      localStorage.setItem('posts', JSON.stringify(updatedPostsAfterDelete)); // Сохраняем в localStorage
      return { ...state, posts: updatedPostsAfterDelete };
    case 'ADD_POST':
      const updatedPostsAfterAdd = [action.payload, ...state.posts];
      localStorage.setItem('posts', JSON.stringify(updatedPostsAfterAdd)); // Сохраняем в localStorage
      return { ...state, posts: updatedPostsAfterAdd };
    case 'LOAD_POSTS_FROM_LOCAL_STORAGE':
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};

export default postReducer;
