import React from "react";
import { Navitem } from "./navitem";

export const Navbar = () => {
  return (
    <>
      <Navitem path="/" title="Home" />
      <Navitem path="/movies/popular" title="Popular" />
      <Navitem path="/movies/top-rated" title="Top Rated" />
      <Navitem path="/movies/upcoming" title="Upcoming" />
    </>
  );
};
