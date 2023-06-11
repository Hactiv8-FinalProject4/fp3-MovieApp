import React from "react";
import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer"
import Home from "../src/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
