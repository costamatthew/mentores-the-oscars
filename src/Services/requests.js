const API_KEY = "dfeeffe529054f5f3c3d5fa4767ea7fa";

export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
};
