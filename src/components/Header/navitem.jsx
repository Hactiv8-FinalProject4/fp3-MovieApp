import React from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";

export const Navitem = ({ path, title }) => {
  const activeKey = useLocation().pathname;
  const style = `
    text-white px-3 py-2 md:dark:hover:text-blue-500 
    ${activeKey == path ? "text-blue-500" : ""}
  `;

  return (
    <Link to={path} className={style} onClick={scrollToTop}>
      {title}
    </Link>
  );
};
