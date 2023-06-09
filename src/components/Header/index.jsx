import React from "react";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="header">
      <div className="w-full bg-slate-950 h-10 ">
        <Link to="/" className="text-white text-left p-4">
          Movie App
        </Link>
        <Link to="/movies/popular" className="text-white text-left p-4">
          Popular
        </Link>
        <Link to="/movies/top_rated" className="text-white text-left p-4">
          Top Rated
        </Link>
        <Link to="/movies/upcoming" className="text-white text-left p-4">
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default index;