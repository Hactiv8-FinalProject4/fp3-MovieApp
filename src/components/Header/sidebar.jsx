import React, { useEffect, useState } from "react";
import { Logo } from "../Logo";
import { Navbar } from "./navbar";
import { Search } from "./search";

export const Sidebar = () => {
  const [sideMenu, setSideMenu] = useState("");
  const openSideMenu = () => sideMenu.classList.remove("hidden");
  const closeSideMenu = (e) => e.target.parentElement.parentElement.parentElement.classList.add("hidden");

  useEffect(() => {
    setSideMenu(document.getElementById("menu"));
  }, []);

  return (
    <>
      <button onClick={openSideMenu} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
        </svg>
      </button>
      <aside id="menu" className="hidden fixed top-0 bottom-0 left-0 w-11/12 flex bg-gray-800 duration-700">
        <div className="w-full flex flex-col text-white px-5 py-4 space-y-4">
          <div className="flex flex-row justify-between items-center mb-6">
            <Logo />
            <button className="text-right text-4xl text-slate-300" onClick={closeSideMenu}>&times;</button>
          </div>
          <Search />
          <Navbar />
        </div>
      </aside>
    </>
  );
};
