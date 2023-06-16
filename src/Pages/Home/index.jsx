import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../../components/MovieList";
import { getData } from "../../utils/getData";
import { Link, useParams } from "react-router-dom";

const Home = ({ endpoint }) => {
  const dispatch = useDispatch();
  const searchParams = useParams();
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    const params = {
      endpoint: endpoint,
      query: searchParams.keySearch ? `&query=${searchParams.keySearch}` : "",
    };
    dispatch(getData(params));
  }, [endpoint, searchParams]);

  return (
    <main className="text-white bg-black pt-28 pb-10">
      {searchParams.keySearch ? (
        <h2 className="text-center text-xl font-bold mb-8 underline">
          Search movie: {searchParams.keySearch}
        </h2>
      ) : (
        ""
      )}
      <article className="flex flex-wrap justify-center gap-2 bg-black">
        {movie.isLoading ? (
          <img src="/loading.gif" alt="loading..." className="m-10" />
        ) : (
          movie.popularMovies.map((movie, idx) => {
            return (
              <Link to={`/Detail/Movie/${movie.id}`} key={idx}>
                <MovieList movie={movie} />
              </Link>
            );
          })
        )}
      </article>
    </main>
  );
};

export default Home;
