import React, { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const MovieList = ({ movie }) => {
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
        <div className="flex container rounded-lg border max-w-[200px] max-h-[300px] group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl ">
          <img
            className=" h-full w-full object-cover transition-transform duration-500 rounded-lg  "
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Sunset in the mountains"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute h-full w-full bg-black/20 flex items-center justify-content p-4 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute grid grid-1 text-white  overflow-hidden">
              <div className="text-lg font-bold">{movie.title}</div>
              <div className="text-lg font-semibold text-white">
              <div className="m-2 text-lg font-semibold text-white float-right">
                
                {movie.vote_average} <FaStar />
              </div>
              <div className="text-sm text-white font-semibold overflow-hidden">

                {movie.release_date}
                </div>
              <div className="text-xs text-white font-style: italic overflow-hidden">
                {movie.overview.slice(0, 120) + "..."}
              </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieList;
