import './App.css'
import { fetchTopRatedMovies } from './api'
import { useEffect, useState } from 'react';

function App() {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    fetchTopRatedMovies()
      .then((data) => {
        setTopRated(data);
      })
      .catch((err) => {
        console.error('Error fetching top rated movies:', err);
      });
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <ul>
        {topRated.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;