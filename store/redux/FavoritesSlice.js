import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorites(state, action) {
      state.ids.push(action.payload);
    },
    removeFavorites(state, action) {
      state.ids = state.ids.filter((id) => id !== action.payload);
    },
  },
});

export const { addFavorites, removeFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;

export const getFav = (state) => state.favorites.ids;
