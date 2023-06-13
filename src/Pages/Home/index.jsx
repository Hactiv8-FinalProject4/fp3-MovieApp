import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from "../../redux/slice/movieSlice";
import MovieList from "../../components/MovieList";
import { getData } from "../../utils/getData";
import { useParams } from "react-router-dom";

const Home = () => {
  // const [popularMovies, setPopularMovies] = useState([]);

  // // useEffect(() => {
  // //   const getPopularMovies = async () => {
  // //     const response = await axios.get(
  // //       `https://api.themoviedb.org/3/movie/popular?api_key=d32c9ac6accdee12edce1834136446f7`
  // //     );
  // //     setPopularMovies(response.data.results);
  // //   };
  // //   getPopularMovies();
  // // }, []);

  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  // console.log(movie.popularMovies);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 bg-black">
        {
          // popularMovies.map((movie) => (
          //   <MovieList key={movie.id} movie={movie} />
          // ))
          movie.popularMovies.map((movie, idx) => {
            // console.log(movie);
            return <MovieList key={idx} movie={movie} />;
          })
        }
      </div>
    </>
  );
};

export default Home;
