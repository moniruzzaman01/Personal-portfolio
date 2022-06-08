import React from "react";

const Contact = () => {
  return (
    <div className="  min-h-[93vh] pt-[40%] md:pt-[20%] lg:pt-[10%]">
      <h1 className=" text-center uppercase text-3xl mb-10 font-bold">
        contact me
      </h1>
      <div className=" max-w-lg mx-auto">
        <form className=" text-center" action="">
          <input
            type="text"
            placeholder="Your Name"
            class="input input-bordered w-full max-w-lg rounded-full mb-5"
          />
          <input
            type="text"
            placeholder="Your Email"
            class="input input-bordered w-full max-w-lg rounded-full mb-5"
          />
          <textarea
            class="textarea textarea-bordered w-full max-w-lg rounded-full mb-5"
            placeholder="Write message here"
          ></textarea>
          <button className="btn btn-outline font-bold text-slate-300 rounded-full px-10 ">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
