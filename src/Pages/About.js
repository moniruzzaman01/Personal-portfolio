import React from "react";
import profile from "../assets/profile_pic.png";

const About = () => {
  return (
    <div className=" min-h-screen mt-10">
      <h4 className=" text-center uppercase text-lg">Main Info</h4>
      <h1 className=" text-center uppercase text-3xl mb-10">About me</h1>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div>
            <img
              src={profile}
              className="max-w-sm rounded-2xl shadow-2xl border-4"
              alt=""
            />
          </div>
          <div>
            <p className=" text-xl mb-5">
              <span>Hi! I'm Moniruzzaman. I'm a web developer.</span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              sint illo, rerum et perferendis quaerat dolorem voluptas totam
              temporibus.
            </p>
            <p className=" text-xl mb-5">
              odit quo alias possimus ut praesentium magnam labore a amet natus!
            </p>
            <button className="btn btn-outline font-bold mt-10 text-slate-300 rounded-full mr-5">
              Download Resume
            </button>
            <button className="btn btn-outline font-bold mt-10 text-slate-300 rounded-full">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
