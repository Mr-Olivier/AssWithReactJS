import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-xl font-bold">React Router App</h1>
        <div className="space-x-4">
          <Link to="/" className="btn btn-ghost">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost">
            About
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Contact
          </Link>
          <Link to="/blog" className="btn btn-ghost">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
