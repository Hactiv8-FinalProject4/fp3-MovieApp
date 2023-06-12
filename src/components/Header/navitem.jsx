import React from 'react';
import { Link, useLocation } from "react-router-dom";

export const Navitem = ({ path, title }) => {
  const activeKey = useLocation().pathname;
  const style = `
    text-white text-left px-4 mx-1 py-2 
    ${activeKey === path ? "bg-slate-600 rounded-lg" : ""}
  `;

  return (
    <Link to={path} className={style}>
      {title}
    </Link>
  )
}
