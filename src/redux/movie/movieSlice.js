import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: [],
    loading: true,
    error: false,
  },
  reducers: {
    setErrors: (state) => {
      state.error = true;
      state.loading = false;
      state.movies = [];
    },
    setLoading: (state) => {
      state.error = false;
      state.loading = true;
      state.movies = [];
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
      state.error = false;
    },
  },
});

export default movieSlice;
