import React from "react";
import profile from "../assets/profile_pic.png";

const Home = () => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col gap-20 lg:flex-row-reverse">
        <img src={profile} class="max-w-sm border-4 rounded-full p-5 " alt="" />
        <div>
          <p class=" text-xl capitalize">hello</p>
          <h1 class="lg:text-5xl font-bold uppercase">i'm moniruzzaman</h1>
          <p class="pb-5 text-2xl capitalize">A full stact web developer</p>
          <button class="btn btn-primary text-white font-bold rounded-full">
            Get Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
