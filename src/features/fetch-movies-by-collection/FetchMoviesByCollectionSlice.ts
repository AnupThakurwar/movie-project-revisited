import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchMovieCollection } from "./FetchMoviesByCollectionThunk";
import type { MovieCollection } from "@/interface/interface";

interface CollectionState {
  collection: MovieCollection | null; // Full TMDB collection object
  loading: boolean;
  error: string | null;
}

const initialState: CollectionState = {
  collection: null,
  loading: false,
  error: null,
};

const fetchMoviesByCollectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    // Resets the collection state when navigating away
    resetCollection: (state) => {
      state.collection = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieCollection.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchMovieCollection.fulfilled,
        (state, action: PayloadAction<MovieCollection>) => {
          state.loading = false;
          state.collection = action.payload;
        },
      )
      .addCase(fetchMovieCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetCollection } = fetchMoviesByCollectionSlice.actions;
export default fetchMoviesByCollectionSlice.reducer;
