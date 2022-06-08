import React from "react";
import profile from "../assets/profile_pic.png";

const Home = () => {
  return (
    <div className="hero my-12 lg:my-32">
      <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
        <img
          src={profile}
          className=" w-full max-w-sm border-4 rounded-full p-5 "
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
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://drive.google.com/file/d/1FDk4LBj0u9QtA-1zURRVWY5DAYgOVEvw/view?usp=sharing"
          >
            <button className="btn btn-outline text-slate-400 font-bold rounded-full px-10">
              download resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
