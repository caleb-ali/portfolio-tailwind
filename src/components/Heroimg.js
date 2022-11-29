import React from "react";

import Introimg from "../assets/programmer.svg";
{/*import { HiDownload } from "react-icons/hi";*/}

const Heroimg = () => {
  return (
    <div className="flex flex-col lg:flow-root lg:ml-24  lg:p-4 lg:mt-12 mt-24 font-Redrose ">
       <div className="text-3xl text-center lg:text-5xl  text-gray-900 lg:mt-48 lg:float-left">
        <h1>Hi. I'm Caleb</h1>
        <h2> A Frontend developer</h2>
        <button
            href="#"
            class="mt-2 text-sm px-4 py-2 rounded  bg-gray-500 hover:bg-persian-green-700 text-white font-normal "
          >
            Download resume {/* <HiDownload /> */}
          </button>
      </div>
      <div className="lg:float-right  lg:mt-10 mt-24 ">
        <img className=" w-4/5 h-4/5 lg:ml-4 ml-12" src={Introimg} alt="Introimg" />
      </div>
     
    </div>
  );
};

export default Heroimg;