import React from "react";
import profile from "../assets/profile_pic.png";

const Home = () => {
  return (
    <div className="hero my-12 lg:my-32">
      <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
        <img
          src={profile}
          className="max-w-sm border-4 rounded-full p-5 "
          alt=""
        />
        <div>
          <p className=" lg:text-xl capitalize">hello</p>
          <h1 className=" text-3xl lg:text-5xl font-bold uppercase">
            i'm moniruzzaman
          </h1>
          <p className="pb-5 lg:text-2xl capitalize">
            A full stack web developer
          </p>
          <button className="btn btn-outline text-slate-400 font-bold rounded-full px-10">
            download resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
