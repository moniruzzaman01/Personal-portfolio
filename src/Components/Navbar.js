import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navModal, setNavModal] = useState(false);
  const navMenuItems = (
    <>
      <li className=" text-xl mb-2">
        <Link to="/">Home</Link>
      </li>
      <li className=" text-xl mb-2">
        <Link to="/about">About</Link>
      </li>
      <li className=" text-xl mb-2">
        <Link to="/contact">Contact</Link>
      </li>
      <li className=" text-xl mb-2">
        <Link to="/portfolio">Portfolio</Link>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div>
          <label
            onClick={() => setNavModal(!navModal)}
            className=" cursor-pointer bg-transparent border-0 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {navModal && (
            <ul className=" mt-5 bg-slate-800 p-5 shadow-2xl rounded-box w-96 ml-1 h-fit absolute z-10">
              {navMenuItems}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-end">
        <Link
          to="/"
          className=" normal-case text-3xl border-4 font-bold h-12 w-12 text-center rounded-full mr-1"
        >
          M
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
