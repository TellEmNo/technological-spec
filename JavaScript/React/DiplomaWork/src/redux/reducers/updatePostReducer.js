const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const updatePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_POST_REQUEST':
      return { ...state, loading: true, error: null };

      case 'UPDATE_POST_SUCCESS':
        const updatedPosts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
        if (updatedPosts.length > 0) {
          localStorage.setItem('posts', JSON.stringify(updatedPosts));
        }
        return {
          ...state,
          loading: false,
          posts: updatedPosts,
        };

    case 'UPDATE_POST_FAILURE':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default updatePostReducer;
