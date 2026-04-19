import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchMoviesByIdThunk } from "./fetchMoviesByIdThunk";

// Define the state structure
interface MovieDetailState {
  movie: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailState = {
  movie: null,
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
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Pending
      .addCase(fetchMoviesByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle Success
      .addCase(
        fetchMoviesByIdThunk.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.movie = action.payload;
        }
      )
      // Handle Failure
      .addCase(fetchMoviesByIdThunk.rejected, (state, action) => {
        state.loading = false;
        // action.payload contains the string from your rejectWithValue
        state.error = action.payload as string;
      });
  },
});

export const { clearMovieDetails } = fetchMoviesByIdSlice.actions;
export default fetchMoviesByIdSlice.reducer;
