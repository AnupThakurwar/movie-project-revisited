import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchAllMoviesThunk } from "./fetchAllMoviesThunk";
import type { MovieResponse } from "@/interface/interface";
import { MOVIE_CATEGORY } from "@/constants/constants";

interface MovieState {
  movies: {
    topRated: any[];
    popular: any[];
    upcoming: any[];
    nowPlaying: any[];
  };
  loading: boolean;
  error: string | null;
  page: number;
  data: MovieResponse | null;
}

const initialState: MovieState = {
  movies: {
    topRated: [],
    popular: [],
    upcoming: [],
    nowPlaying: [],
  },
  loading: false,
  error: null,
  page: 1,
  data: null,
};

const fetchAllMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMoviesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAllMoviesThunk.fulfilled,
        (state, action: PayloadAction<MovieResponse>) => {
          state.loading = false;
          switch (action.payload.subCategory) {
            case MOVIE_CATEGORY.POPULAR:
              state.movies.popular = action.payload.results;
              break;
            case MOVIE_CATEGORY.TOP_RATED:
              state.movies.topRated = action.payload.results;
              break;
            case MOVIE_CATEGORY.NOW_PLAYING:
              state.movies.nowPlaying = action.payload.results;
              break;
            case MOVIE_CATEGORY.UPCOMING:
              state.movies.upcoming = action.payload.results;
              break;
            default:
              state.movies.nowPlaying = [];
              state.movies.topRated = [];
              state.movies.upcoming = [];
              state.movies.popular = [];
              break;
          }

          state.data = action.payload;
        },
      )
      .addCase(fetchAllMoviesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage } = fetchAllMoviesSlice.actions;
export default fetchAllMoviesSlice.reducer;
