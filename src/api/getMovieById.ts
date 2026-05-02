import movieApi from "./apiConfig";

export const getMoviebyId = async ({ id }: { id: string | number }) => {
  try {
    const results = await movieApi.get(
      `3/movie/${id}?api_key=${
        import.meta.env.VITE_MOVIE_API_KEY
      }&language=en-US&append_to_response=images,releases,credits,videos&include_image_language=en,null`,
    );
    return results.data;
  } catch (error: any) {
    console.error(
      "Error fetching movies:",
      error.response?.data?.status_message || error.message,
    );
    throw error;
  }
};

export const getMoviebyIdWatchProviders = async ({
  id,
}: {
  id: string | number;
}) => {
  try {
    const results = await movieApi.get(
      `3/movie/${id}/watch/providers?api_key=${
        import.meta.env.VITE_MOVIE_API_KEY
      }&language=en-US&append_to_response=images,releases,credits,videos&include_image_language=en,null`,
    );
    return results.data;
  } catch (error: any) {
    console.error(
      "Error fetching movies:",
      error.response?.data?.status_message || error.message,
    );
    throw error;
  }
};
