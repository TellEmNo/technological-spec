import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // Проверка, что товара нет в списке
      const existingProduct = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (!existingProduct) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    }
  }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
