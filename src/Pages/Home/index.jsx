import React from "react";
import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList";
import { getData } from "../../utils/getData";
import { useParams } from "react-router-dom";

const Home = ({ endpoint }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const searchParams = useParams();

  useEffect(() => {
    getData(endpoint, `&query=${searchParams.keySearch}` || "")
      .then(movie => setPopularMovies(movie.results))
      .catch(err => console.log(err));
  }, [endpoint, searchParams]);

  return (
    <main className="text-white bg-black pt-28 pb-10">
      {searchParams.keySearch
        ? <h2 className="text-center text-xl font-bold mb-8 underline">Search movie: {searchParams.keySearch}</h2>
        : ""}
      <article className="flex flex-wrap justify-center gap-3">
        {popularMovies.map((movie) => (
          <MovieList key={movie.id} movie={movie} />
        ))}
      </article>
    </main>
  );
};

export default Home;
