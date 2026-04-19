import movieApi from "@/api/apiConfig";

export const getAllMovies = async ({
  page = 1,
  category = "movie",
  subCategory = "popular",
}: {
  page: number;
  category: string;
  subCategory: string;
}) => {
  try {
    const response = await movieApi.get(
      `/3/${category}/${subCategory}?api_key=${
        import.meta.env.VITE_MOVIE_API_KEY
      }&language=en-US&page=${page}&append_to_response=videos`
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching movies:",
      error.response?.data?.status_message || error.message
    );
    throw error;
  }
};
