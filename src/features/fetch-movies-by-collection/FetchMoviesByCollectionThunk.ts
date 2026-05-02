import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieCollection } from "@/api/getCollectionMovie";
import type { MovieCollection } from "@/interface/interface";

export const fetchMovieCollection = createAsyncThunk<
  MovieCollection,
  { collectionId: string | number },
  { rejectValue: string | any }
>(
  "movie/collectionMovie",
  async (
    { collectionId }: { collectionId: string | number },
    { rejectWithValue },
  ) => {
    try {
      const response = await getMovieCollection({ collectionId });
      return response;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.status_message ||
          "Error fetching movie collection",
      );
    }
  },
);
