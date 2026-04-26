import { getAllTvShows } from "@/api/getAllTvShows";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllTvShowsThunk = createAsyncThunk(
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
      const response = await getAllTvShows({ page, category, subCategory });
      console.log(response);
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.status_message || "Failed to fetch movies",
      );
    }
  },
);
