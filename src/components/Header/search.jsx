import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const [keySearch, setKeySearch] = useState("");
  const navigate = useNavigate();
  const handleChangeKey = e => setKeySearch(e.target.value);
  const handleSeacrh = e => {
    if (keySearch) {
      e.preventDefault();
      navigate(`movies/search/${keySearch}`);
      setKeySearch("");
    };
  };

  return (
    <label className="relative w-1/4">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <FaSearch color="#aaa" />
      </span>
      <span className="absolute inset-y-0 right-0 flex items-center">
        <button className="bg-slate-600 text-white px-3 h-full rounded-r" onClick={handleSeacrh}>search</button>
      </span>
      <form onSubmit={handleSeacrh}>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search movie..."
          type="text"
          name="search"
          value={keySearch}
          onChange={handleChangeKey}
        />
      </form>
    </label>
  )
}
