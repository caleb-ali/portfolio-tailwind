import React from "react";
import { Link } from "react-scroll";
import Introimg from "../assets/programmer.svg";


const Heroimg = () => {
  return (
    <div className="flex flex-col justify-center items-center  lg:items-left lg:flex-row lg:space-x-32  mx-auto  lg:mb-40  lg:mt-32 mt-[150px] font-Redrose " id="hero">
       <div className="text-center lg:text-start text-3xl lg:text-5xl  text-gray-900 lg:mt-48 ">
        <h1> <span className="text-persian-green-600">Hi.</span> I'm Caleb</h1>
        <h2> A Frontend developer</h2>
        <a
            href="https://drive.google.com/file/d/1K4L_-TWddUeCy98ZEh07QxO2G9lEX5G9/view?usp=sharing"
            target="_blank"
              rel="noreferrer"
            class="mt-2 text-sm px-4 py-2 rounded  bg-persian-green-500 hover:bg-persian-green-600 text-white font-normal "
          >
            Download resume 
          </a>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500} className="mt-2 text-sm  ml-4 px-4 py-2 rounded text-persian-green-600 font-normal border-[1px] hover:bg-persian-green-500 hover:border-[0px] hover:text-white">
            {/*
          <button
            
          >
            view projects 
  </button>*/}view projects
          </Link>
      </div>

      <div className="lg:mt-10 p-4 ">
        <img className="w-[550px] h-[450px]" src={Introimg} alt="Introimg" />
      </div>
     
    </div>
  );
};

export default Heroimg;
