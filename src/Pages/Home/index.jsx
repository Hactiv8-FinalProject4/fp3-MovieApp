import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=d32c9ac6accdee12edce1834136446f7`
      );
      setPopularMovies(response.data.results);
    };
    getPopularMovies();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 bg-black">
        {popularMovies.map((movie) => (
            <MovieList key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
