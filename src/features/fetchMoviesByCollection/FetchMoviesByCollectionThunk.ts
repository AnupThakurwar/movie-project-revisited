import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieCollection } from "@/api/getCollectionMovie";

export const fetchMovieCollection = createAsyncThunk(
  "movie/collectionMovie",
  async (
    { collectionId }: { collectionId: string | number },
    { rejectWithValue }
  ) => {
    try {
      const response = await getMovieCollection({ collectionId });
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.status_message ||
          "Error fetching movie collection"
      );
    }
  }
);
