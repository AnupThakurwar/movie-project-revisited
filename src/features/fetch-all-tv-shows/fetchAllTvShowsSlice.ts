import { TV_CATEGORY } from "@/constants/constants";
import type { TVShowResponse } from "@/interface/interface";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { fetchAllTvShowsThunk } from "./fetchAllTvShowsThunk";

interface tvShowstate {
  tvShows: {
    topRated: any[];
    popular: any[];
    airingToday: any[];
    onTheAir: any[];
  };
  loading: boolean;
  error: string | null;
  page: number;
  data: TVShowResponse | null;
}

const initialState: tvShowstate = {
  tvShows: {
    topRated: [],
    popular: [],
    airingToday: [],
    onTheAir: [],
  },
  loading: false,
  error: null,
  page: 1,
  data: null,
};

const fetchAlltvShowsSlice = createSlice({
  name: "tvShows",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTvShowsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAllTvShowsThunk.fulfilled,
        (state, action: PayloadAction<TVShowResponse>) => {
          state.loading = false;

          switch (action.payload.subCategory) {
            case TV_CATEGORY.POPULAR:
              state.tvShows.popular = action.payload.results;
              break;
            case TV_CATEGORY.TOP_RATED:
              state.tvShows.topRated = action.payload.results;
              break;
            case TV_CATEGORY.AIRING_TODAY:
              state.tvShows.airingToday = action.payload.results;
              break;
            case TV_CATEGORY.ON_THE_AIR:
              state.tvShows.onTheAir = action.payload.results;
              break;
            default:
              state.tvShows.airingToday = [];
              state.tvShows.topRated = [];
              state.tvShows.onTheAir = [];
              state.tvShows.popular = [];
              break;
          }

          state.data = action.payload;
        },
      )
      .addCase(fetchAllTvShowsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage } = fetchAlltvShowsSlice.actions;
export default fetchAlltvShowsSlice.reducer;
