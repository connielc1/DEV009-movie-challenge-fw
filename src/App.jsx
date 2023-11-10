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
      .catch((err) => console.error(err));

  }, []);
  return (
    <>
  {console.log(topRated)}
    </>
  )
}

export default App
