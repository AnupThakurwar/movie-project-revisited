import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchAllMoviesThunk } from "./fetchAllMoviesThunk";

interface MovieState {
  movies: any[];
  loading: boolean;
  error: string | null;
  page: number;
  data: any[];
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
  page: 1,
  data: [],
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
      .addCase(fetchAllMoviesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload.results;
        state.data = action.payload;
      })
      .addCase(fetchAllMoviesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage } = fetchAllMoviesSlice.actions;
export default fetchAllMoviesSlice.reducer;
