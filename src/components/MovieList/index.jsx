import React, { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const MovieList = (movie) => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 500);
  }, []);
  
  return (
    <>
      {isLoaded ? (
        <div className="flex justify-center items-center h-screen ">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
       <Link to={`/DetailMovie/${movie.movie.id}`}>
      
        <div className="flex container rounded-lg border max-w-[200px] max-h-[300px] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl">
  <img
    className="h-full w-full object-cover transition-transform duration-500 rounded-lg"
    src={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`}
    alt="Movie Poster"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
  <div className="absolute h-full w-full bg-black/20 flex items-center justify-center p-4 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
    <div className="text-white">
      <h3 className="text-lg font-bold">{movie.movie.title}</h3>
      <div className="flex items-center mt-2">
        <div className="text-lg font-semibold mr-2">{movie.movie.vote_average}</div>
        <div>
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`inline text-yellow-500 ${
                index < Math.round(movie.movie.vote_average / 2) ? "fill-current" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-sm text-white mt-2">{movie.movie.release_date}</p>
      <p className="text-xs text-white italic mt-2">{movie.movie.overview.slice(0, 120) + "..."}</p>
    </div>
  </div>
</div>

      </Link>   
      )}
    </>
  );
};

export default MovieList;
