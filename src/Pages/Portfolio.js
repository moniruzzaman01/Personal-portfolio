import React from "react";
import portfolio from "../assets/portfolio/portfolio.png";
import portfolio1 from "../assets/portfolio/portfolio1.png";
import portfolio2 from "../assets/portfolio/portfolio2.png";

const Portfolio = () => {
  const openLink = (link) => {
    window.open(link);
  };
  return (
    <div className=" min-h-[93vh]">
      <div className=" flex justify-center p-10">
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
          {/* card start */}
          <div className="card md:card-side lg:card-side bg-base-100 shadow-xl">
            <div className=" lg:w-1/2">
              <figure>
                <img src={portfolio2} alt="Album" />
              </figure>
              <div className=" mt-3 flex justify-around mb-3">
                <button
                  onClick={() =>
                    openLink("https://creative-agency-by-shakib.netlify.app/")
                  }
                  className="btn btn-sm btn-outline"
                >
                  Live site
                </button>
                <button
                  onClick={() =>
                    openLink(
                      "https://github.com/moniruzzaman01/creative-agency-client"
                    )
                  }
                  className="btn btn-sm btn-outline"
                >
                  code link
                </button>
                {/* <button className="btn btn-sm btn-outline">server code</button> */}
              </div>
            </div>
            <div className=" p-3">
              <h2 className=" text-xl">Creative Agency - (template)</h2>
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
          {/* card start */}
          <div className="card md:card-side lg:card-side bg-base-100 shadow-xl">
            <div className=" lg:w-1/2">
              <figure>
                <img src={portfolio} alt="Album" />
              </figure>
              <div className=" mt-3 flex justify-around mb-3">
                <button
                  onClick={() => openLink("https://groceries-59179.web.app/")}
                  className="btn btn-sm btn-outline"
                >
                  Live site
                </button>
                <button
                  onClick={() =>
                    openLink(
                      "https://github.com/moniruzzaman01/groceries-client-side"
                    )
                  }
                  className="btn btn-sm btn-outline"
                >
                  Client Code
                </button>
                <button
                  onClick={() =>
                    openLink(
                      "https://github.com/moniruzzaman01/groceries-server-side"
                    )
                  }
                  className="btn btn-sm btn-outline"
                >
                  server code
                </button>
              </div>
            </div>
            <div className=" p-3">
              <h2 className=" text-xl">Groceries</h2>
              <h3 className=" text-lg mt-2"> Features:</h3>
              <p>1. Firebase Authentication system.</p>
              <p>2. Database access to secure data.</p>
              <p>3. Product add and remove product feature.</p>
              <h3 className=" text-lg mt-2"> Tools: </h3>
              <div className=" flex justify-around">
                <div>
                  <p>1. React.js</p>
                  <p>2. Tailwind CSS</p>
                  <p>3. Daisy UI</p>
                </div>
                <div>
                  <p>4. Mongodb</p>
                  <p>5. Node.js</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          {/* card end */}
          {/* card start */}
          <div className="card md:card-side lg:card-side bg-base-100 shadow-xl">
            <div className=" lg:w-1/2">
              <figure>
                <img src={portfolio1} alt="Album" />
              </figure>
              <div className=" mt-3 flex justify-around mb-3">
                <button
                  onClick={() =>
                    openLink("https://assignment-12-fec01.web.app/")
                  }
                  className="btn btn-sm btn-outline"
                >
                  Live site
                </button>
                <button
                  onClick={() =>
                    openLink(
                      "https://github.com/moniruzzaman01/exim-manufacturer-company-client"
                    )
                  }
                  className="btn btn-sm btn-outline"
                >
                  Client Code
                </button>
                <button
                  onClick={() =>
                    openLink(
                      "https://github.com/moniruzzaman01/exim-manufacturer-company-server"
                    )
                  }
                  className="btn btn-sm btn-outline"
                >
                  server code
                </button>
              </div>
            </div>
            <div className=" p-3">
              <h2 className=" text-xl">Exim - manufacturer company</h2>
              <h3 className=" text-lg mt-2"> Features:</h3>
              <p>1. Firebase Authentication System.</p>
              <p>2. Stripe payment system.</p>
              <p>3. Special features for admin access.</p>
              <h3 className=" text-lg mt-2"> Tools: </h3>
              <div className=" flex justify-around">
                <div>
                  <p>1. React.js</p>
                  <p>2. Tailwind CSS</p>
                  <p>3. Daisy UI</p>
                </div>
                <div>
                  <p>4. Mongodb</p>
                  <p>5. Node.js</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// <div className="card card-compact bg-base-100">
//   <figure>
//     <img src={portfolio} alt="" />
//   </figure>
//   <div className=" p-3">
//     <h2 className=" text-xl">Creative Agency - (template)</h2>
//     <h3 className=" text-lg "> Features:</h3>
//     <p>1.</p>
//     <p>2.</p>
//     <p>3.</p>
//     <p>4.</p>
//     <p>5.</p>
//     <div className=" mt-3 flex justify-around mb-3">
//       <button className="btn btn-sm btn-outline">Live site</button>
//       <button className="btn btn-sm btn-outline">Client Code</button>
//       <button className="btn btn-sm btn-outline">server code</button>
//     </div>
//   </div>
// </div>
