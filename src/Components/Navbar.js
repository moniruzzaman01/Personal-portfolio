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
        <Link to="/appoinment">Appoinment</Link>
      </li>
      <li className=" text-xl mb-2">
        <Link to="/review">Review</Link>
      </li>
      <li className=" text-xl mb-2">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className=" text-xl mb-2">
        <Link to="/about">About</Link>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            onClick={() => setNavModal(!navModal)}
            className="btn bg-transparent border-0 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {navModal && (
            <ul className=" mt-5 bg-slate-800 p-5 shadow-2xl rounded-box w-60 h-60 absolute">
              {navMenuItems}
            </ul>
          )}
        </div>
      </div>
      <div className="navbar-end">
        <Link
          to="/"
          className=" normal-case text-3xl border-4 font-bold h-12 w-12 text-center rounded-full mr-5"
        >
          S
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
