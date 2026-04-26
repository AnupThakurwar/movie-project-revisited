import { getMoviebyId } from "@/api/getMovieById";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMoviesByIdThunk = createAsyncThunk(
  "movie/fetchMoviebyId",
  async ({ id }: { id: string | number }, { rejectWithValue }) => {
    try {
      const response = await getMoviebyId({ id });
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.status_message || "Error fetching movie details"
      );
    }
  }
);
