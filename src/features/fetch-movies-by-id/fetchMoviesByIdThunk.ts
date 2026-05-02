import { getMoviebyId, getMoviebyIdWatchProviders } from "@/api/getMovieById";
import type { MovieDetail, WatchProviderResponse } from "@/interface/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMoviesByIdThunk = createAsyncThunk<
  MovieDetail,
  { id: string | number },
  { rejectValue: string | any }
>(
  "movie/fetchMoviebyId",
  async ({ id }: { id: string | number }, { rejectWithValue }) => {
    try {
      const response = await getMoviebyId({ id });
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.status_message || "Error fetching movie details",
      );
    }
  },
);

export const fetchMoviesByIdWatchProviderThunk = createAsyncThunk<
  WatchProviderResponse,
  { id: string | number },
  { rejectValue: string | any }
>(
  "movie/fetchMoviebyIdWatchProvider",
  async ({ id }: { id: string | number }, { rejectWithValue }) => {
    try {
      const response = await getMoviebyIdWatchProviders({ id });
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.status_message || "Error fetching movie details",
      );
    }
  },
);
