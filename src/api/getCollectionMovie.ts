import movieApi from "./apiConfig";

export const getMovieCollection = async ({
  collectionId,
}: {
  collectionId: string | number;
}) => {
  try {
    const collectionResults = await movieApi.get(
      `3/collection/${collectionId}?api_key=${
        import.meta.env.VITE_MOVIE_API_KEY
      }&append_to_response=images,credits,releases,collections&language=en-US&include_image_language=en,null`
    );
    return collectionResults.data;
  } catch (error: any) {
    console.error(
      "Error fetching movies:",
      error.response?.data?.status_message || error.message
    );
    throw error;
  }
};
