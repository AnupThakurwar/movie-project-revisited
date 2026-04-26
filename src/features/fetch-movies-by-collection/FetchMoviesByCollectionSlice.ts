import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchMovieCollection } from "./FetchMoviesByCollectionThunk";

// Define the shape of a collection part (individual movie) for better typing
interface CollectionPart {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

interface CollectionState {
  collection: any | null; // Full TMDB collection object
  parts: CollectionPart[]; // Array of movies in the franchise
  loading: boolean;
  error: string | null;
}

const initialState: CollectionState = {
  collection: null,
  parts: [],
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
      state.parts = [];
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
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.collection = action.payload;
          // TMDB returns the movies in a 'parts' array
          state.parts = action.payload?.parts || [];
        }
      )
      .addCase(fetchMovieCollection.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetCollection } = fetchMoviesByCollectionSlice.actions;
export default fetchMoviesByCollectionSlice.reducer;
