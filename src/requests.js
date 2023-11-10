const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDk0ZDA4MGM4ZmY3NWY5M2Y3Njc2NjU2YzVjNjAzMSIsInN1YiI6IjYzYzllYWI0MDNmMGI2MDA3OTA0MmZkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-gzmXs-Ea8rQ_-9vSOkZfLLwv5pk39dRG3XUJ07Q_ks";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
