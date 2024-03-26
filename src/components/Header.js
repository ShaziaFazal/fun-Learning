import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold">My React Tailwind App</h1>
      <nav className="mt-4">
        <Link className="mr-4" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
