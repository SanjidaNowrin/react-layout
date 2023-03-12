import React from "react";
import { Link, useLocation } from "react-router-dom";
const LeftSide = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>
      <Link
        to="about"
        className={`text-decoration-none text-dark ${
          pathname === "/about" ? "text-active" : "text"
        }`}
      >
        <h2>About</h2>
      </Link>
      <Link
        to="contact"
        className={`text-decoration-none text-dark ${
          pathname === "/contact" ? "text-active" : "text"
        }`}
      >
        <h2>Contact</h2>
      </Link>
    </div>
  );
};

export default LeftSide;
