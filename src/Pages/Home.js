import React from "react";
import profile from "../assets/profile_pic.png";

const Home = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
        <img
          src={profile}
          className="max-w-sm border-4 rounded-full p-5 "
          alt=""
        />
        <div>
          <p className=" text-xl capitalize">hello</p>
          <h1 className="lg:text-5xl font-bold uppercase">i'm moniruzzaman</h1>
          <p className="pb-5 text-2xl capitalize">A full stact web developer</p>
          <button className="btn btn-primary text-white font-bold rounded-full">
            Get Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
