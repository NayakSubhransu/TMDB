import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";
import categorySlice from "./categorySlice";
import movieSlice from "./movie/movieSlice";
import watchlistSlice from "./movie/watchlistSlice";

const store = configureStore({
  reducer: {
    paginationState: paginationSlice.reducer,
    categoryState: categorySlice.reducer,
    movieState: movieSlice.reducer,
    watchlistState: watchlistSlice.reducer,
  },
});

export default store;
