import axios from "axios";

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    "Content-Type": "application/json",
  },
});

export default movieApi;
