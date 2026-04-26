import fetchAllMoviesSlice from "@/features/fetch-all-movies/fetchAllMoviesSlice";
import fetchAlltvShowsSlice from "@/features/fetch-all-tv-shows/fetchAllTvShowsSlice";
import fetchMoviesByCollectionSlice from "@/features/fetch-movies-by-collection/FetchMoviesByCollectionSlice";
import fetchMoviesByIdSlice from "@/features/fetch-movies-by-id/fetchMoviesByIdSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    fetchAllMovies: fetchAllMoviesSlice,
    fetchAllTvShows: fetchAlltvShowsSlice,
    fetchMoviesById: fetchMoviesByIdSlice,
    fetchMovieByCollection: fetchMoviesByCollectionSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { useDispatch, useSelector } from "react-redux";
