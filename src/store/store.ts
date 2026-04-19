import fetchAllMoviesSlice from "@/features/fetchAllMovies/fetchAllMoviesSlice";
import fetchMoviesByCollectionSlice from "@/features/fetchMoviesByCollection/FetchMoviesByCollectionSlice";
import fetchMoviesByIdSlice from "@/features/fetchMoviesById/fetchMoviesByIdSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    fetchAllMovies: fetchAllMoviesSlice,
    fetchMoviesById: fetchMoviesByIdSlice,
    fetchMovieByCollection: fetchMoviesByCollectionSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { useDispatch, useSelector } from "react-redux";
