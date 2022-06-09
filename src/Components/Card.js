import React from "react";

const Card = ({ img }) => {
  return (
    <>
      {/* card start */}
      <div class="card md:card-side lg:card-side bg-base-100 shadow-xl">
        <div className=" w-1/2">
          <figure>
            <img src={img} alt="Album" />
          </figure>
          <div className=" mt-3 flex justify-around mb-3">
            <button class="btn btn-sm btn-outline">Live site</button>
            <button class="btn btn-sm btn-outline">Client Code</button>
            <button class="btn btn-sm btn-outline">server code</button>
          </div>
        </div>
        <div class=" p-3">
          <h2 class=" text-xl">Creative Agency - (template)</h2>
          <h3 className=" text-lg mt-2"> Features:</h3>
          <p>1. Eye catchy color combination.</p>
          <p>2. Responsive design.</p>
          <p>3. Dashboard access.</p>
          <h3 className=" text-lg mt-2"> Tools: </h3>
          <p>1. React.js</p>
          <p>2. Tailwind CSS</p>
          <p>3. Daisy UI</p>
        </div>
      </div>
      {/* card end */}
    </>
  );
};

export default Card;
