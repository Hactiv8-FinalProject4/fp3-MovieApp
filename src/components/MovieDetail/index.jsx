import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../utils/getDetail";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 500);
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <>
      {detail.isLoading ? (
        <div className="flex justify-center items-center h-screen ">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
              ) : (
      <article className="flex flex-wrap justify-center gap-2 bg-black">
        <div className="flex justify-center items-center flex-col relative">
          <div className="flex flex-col justify-center items-center">
            <div
              className="w-[1200px] h-[500px] bg-cover bg-center border-radius-2xl mt-28 relative overflow-hidden"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail?.detail?.backdrop_path})`,
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 translate-x-60">
              <img
                className="w-[200px] border-radius-2xl shadow-lg box-border"
                src={`https://image.tmdb.org/t/p/w500/${detail?.detail?.poster_path}`}
                alt="Movie Poster"
              />
            </div>

            <div className="mt-4 p-20">
              <div className="text-white text-2xl font-bold">
                {detail?.detail?.title}
              </div>
              <div className="text-white text-xl font-semibold">
                Release Date: {detail?.detail?.release_date}
              </div>
              <div className="flex items-center text-white text-xl font-semibold">
                Rating: {detail?.detail?.vote_average}{" "}
                <FaStar className="ml-1" />
              </div>
              <div className="text-white text-xl font-semibold mt-4">
                Genre:{" "}
                {detail?.detail?.genres?.map((genre) => genre.name).join(", ")}
              </div>
              <div className="text-white text-xl font-semibold">
                Duration: {detail?.detail?.runtime} min
              </div>
              <div className="text-white text-xl font-semibold mt-4">
                Synopsis:
              </div>
              <p className="text-white">{detail?.detail?.overview}</p>
            </div>
          </div>
        </div>
      </article>
      )}
    </>
  );
};

export default MovieDetail;
