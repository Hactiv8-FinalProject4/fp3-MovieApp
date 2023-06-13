import React from "react";
import { Navbar } from './navbar';
import { Search } from "./search";
import { Sidebar } from "./sidebar";
import { Logo } from "../Logo";

const index = () => {
  return (
    <header className="header bg-slate-950 py-4 px-5 flex flex-row justify-between items-center fixed w-full z-50 border-b border-slate-700">
      <nav className="hidden w-full lg:block lg:w-auto">
        <Navbar />
      </nav>
      <Logo />
      <div className="hidden w-full lg:block lg:w-1/4">
        <Search />
      </div>
      <Sidebar />
    </header>
  );
};

export default index;
