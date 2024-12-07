import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get('/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.movieTitle} - {movie.genre} (Rating: {movie.rating})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
