import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  {
    /*const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }*/
  }

  return (
    <div className="relative z-40">
      <nav className="fixed top-0 left-0 right-0  flex lg:flow-root items-center justify-between flex-wrap p-4 lg:pt-10 bg-white ">
        <a href='/'className="text-2xl lg:ml-24 font-Redrose  lg:float-left" >
          <p className="text-persian-green-600" >CALEB ALI</p>
        </a>

        <div className="block lg:hidden">
          <button
            className=" text-gray-600 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:mr-24 lg:float-right  ${
            navbar ? "block" : "hidden"
          }`}
        >
          <div className="text-lg  lg:flex-grow font-Redrose text-gray-800">
            <Link
              to="hero" spy={true} smooth={true} offset={-120} duration={500}
              className="block mt-4 lg:inline-block lg:mt-0 ml-4  lg:mr-8  hover:underline hover:underline-offset-8 decoration-persian-green-600"
              
            >
              Home
             
            </Link>

            <Link
              to="projects" spy={true} smooth={true} offset={-70} duration={500}
              className="block mt-4 lg:inline-block lg:mt-0 ml-4 lg:mr-8  hover:underline hover:underline-offset-8 decoration-persian-green-600"
              
            >
              Projects
            </Link>

            <Link
              to="about" spy={true} smooth={true} offset={-130} duration={500}
              className="block mt-4 lg:inline-block lg:mt-0 ml-4 lg:mr-8  hover:underline hover:underline-offset-8 decoration-persian-green-600"
            
            >
              About
            </Link>

            <Link
             to="contact" spy={true} smooth={true} offset={-80} duration={500}
              className="block mt-4 lg:inline-block lg:mt-0 ml-4  hover:underline hover:underline-offset-8 decoration-persian-green-600"
              
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
