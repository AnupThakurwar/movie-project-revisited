import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  fetchMoviesByIdThunk,
  fetchMoviesByIdWatchProviderThunk,
} from "./fetchMoviesByIdThunk";
import type { MovieDetail, WatchProviderResponse } from "@/interface/interface";

// Define the state structure
interface MovieDetailState {
  movie: MovieDetail | null;
  watchProviders: WatchProviderResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailState = {
  movie: null,
  watchProviders: null,
  loading: false,
  error: null,
};

const fetchMoviesByIdSlice = createSlice({
  name: "movieDetail",
  initialState,
  reducers: {
    // Call this when unmounting the component to reset the state
    clearMovieDetails: (state) => {
      state.movie = null;
      state.watchProviders = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchMoviesByIdThunk.fulfilled,
        (state, action: PayloadAction<MovieDetail>) => {
          state.loading = false;
          state.movie = action.payload;
        },
      )
      .addCase(fetchMoviesByIdThunk.rejected, (state, action) => {
        state.loading = false;
        // action.payload contains the string from your rejectWithValue
        state.error = action.payload as string;
      })
      .addCase(fetchMoviesByIdWatchProviderThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchMoviesByIdWatchProviderThunk.fulfilled,
        (state, action: PayloadAction<WatchProviderResponse>) => {
          state.loading = false;
          state.watchProviders = action.payload;
        },
      )
      .addCase(fetchMoviesByIdWatchProviderThunk.rejected, (state, action) => {
        state.loading = false;
        // action.payload contains the string from your rejectWithValue
        state.error = action.payload as string;
      });
  },
});

export const { clearMovieDetails } = fetchMoviesByIdSlice.actions;
export default fetchMoviesByIdSlice.reducer;
