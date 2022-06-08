import React, { useState } from "react";
import { Link } from "react-router-dom";
import nav from "../assets/bg.jpg";

const Navbar = () => {
  const [navModal, setNavModal] = useState(false);
  const navMenuItems = (
    <>
      <button className="btn btn-outline border-2 rounded-full font-bold text-2xl absolute top-5 right-5 h-12 w-12">
        X
      </button>
      <Link to="/">
        <button className="btn btn-lg px-32 btn-outline rounded-full block mx-auto mb-5 w-full max-w-lg">
          Home
        </button>
      </Link>
      <Link to="/about">
        <button className="btn btn-lg px-32 btn-outline rounded-full block mx-auto mb-5 w-full max-w-lg">
          About
        </button>
      </Link>
      <Link to="/contact">
        <button className="btn btn-lg px-32 btn-outline rounded-full block mx-auto mb-5 w-full max-w-lg">
          contact
        </button>
      </Link>
      <Link to="/portfolio">
        <button className="btn btn-lg px-32 btn-outline rounded-full block mx-auto mb-5 w-full max-w-lg">
          portfolio
        </button>
      </Link>
    </>
  );
  return (
    <div className=" px-5 lg:px-10 ">
      <div className=" flex justify-between items-center min-h-[7vh]">
        <label
          onClick={() => setNavModal(!navModal)}
          className=" cursor-pointer bg-transparent border-0 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12"
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
        <div>
          <Link
            to="/"
            className=" block text-3xl font-bold border-4 rounded-full h-12 w-12 text-center "
          >
            M
          </Link>
        </div>
      </div>
      {navModal && (
        <ul
          className="fixed  z-10 left-0 top-0 h-full right-0 flex justify-center items-center"
          style={{
            backgroundImage: `url(${nav})`,
            backgroundPosition: "center 0%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div onClick={() => setNavModal(!navModal)}>{navMenuItems}</div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
