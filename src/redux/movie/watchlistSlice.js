// src/store/watchlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem("watchlist")) || [];

const watchlistSlice = createSlice({
  name: 'watchlistSlice',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("watchlist", JSON.stringify(state));
    },
    removeFromWatchlist: (state, action) => {
      const updatedState = state.filter(
        (movie) => movie.id !== action.payload.id
      );
      localStorage.setItem("watchlist", JSON.stringify(updatedState));
      return updatedState;
    },
    setWatchlist: (state, action) => {
      localStorage.setItem("watchlist", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { addToWatchlist, removeFromWatchlist, setWatchlist } = watchlistSlice.actions;
export default watchlistSlice;
