import axios from 'axios';

const API_KEY = 'efb495fff3706abe3c98fcab5615ca8d';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchApiTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchApiSearchMovies = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );
  return response.data.results;
};

export const fetchApiMoviesDetails = async id => {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchApiMoviesCredits = async id => {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchApiMoviesReviews = async id => {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};
