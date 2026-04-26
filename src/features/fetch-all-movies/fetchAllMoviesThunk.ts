import { getAllMovies } from "@/api/getAllMovies";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllMoviesThunk = createAsyncThunk(
  "movies/fetchAll",
  async (
    {
      page,
      category,
      subCategory,
    }: { page: number; category: string; subCategory: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await getAllMovies({ page, category, subCategory });
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.status_message || "Failed to fetch movies",
      );
    }
  },
);
