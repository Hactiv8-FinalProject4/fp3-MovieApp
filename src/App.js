import React from "react";
import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer"
import Home from "../src/Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home endpoint="movie/now_playing" />} />
        <Route path="/*" element={<Home endpoint="movie/now_playing" />} />
        <Route path="/movies/popular" element={<Home endpoint="movie/popular" />} />
        <Route path="/movies/top_rated" element={<Home endpoint="movie/top_rated" />} />
        <Route path="/movies/upcoming" element={<Home endpoint="movie/upcoming" />} />
        <Route path="/movies/search/:keySearch" element={<Home endpoint="search/movie" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
