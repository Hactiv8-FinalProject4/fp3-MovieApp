import React from "react";
import { Navbar } from './navbar';
import { Search } from "./search";

const index = () => {
  return (
    <header className="header bg-slate-950 py-4 px-5 flex flex-row justify-between items-center fixed w-full z-50 border-b border-slate-700">
      <h1 className="text-white text-3xl font-bold">Movie App</h1>
      <Navbar />
      <Search />
    </header>
  );
};

export default index;