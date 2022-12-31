import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Contactpage = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_63eiq5b",
        "template_6fwxzlq",
        formRef.current,
        "jzPCXG5GJMKkMLvNx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div  id="contact">
      <div className="flex justify-center font-Redrose font-bold text-gray-500 text-2xl underline underline-offset-8 decoration-persian-green-600">
        Contact Me
      </div>
      <div className="lg:py-4 px-8 py-8 mt-8 lg:mb-[140px] mb-[40px] flex flex-col justify-center lg:flex-row lg:space-x-32  mx-auto ">
        <div className=" text-gray-900 font-Redrose mt-4">
          <h2 className="text-3xl lg:text-5xl">
            Love to hear <br /> from you, <br /> Get in touch.
          </h2>
          <div className="lg:mt-[50px] flex flex-row items-center gap-4 text-3xl text-black">
            <a
              href="https://twitter.com/_realkally"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              {" "}
              <BsTwitter />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/caleb-ali-94305b14b/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaLinkedin />{" "}
            </a>
            <a
              href="https://github.com/caleb-ali"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FaGithub />{" "}
            </a>
            <a
              href="https://medium.com/@caleb_ali"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <BsMedium />{" "}
            </a>
          </div>
        </div>

        <div
          className="font-Redrose lg:py-4 px-8 py-8 mx-auto max-w-screen-sm"
         
        >
          <p className="text-gray-500">
            <span className="font-semibold text-persian-green-600 ">
              {" "}
              What's your story?
            </span>{" "}
            Always available for freelancing if the right
            <br />
            projects comes along
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="outline-persian-green-500  w-full text-base leading-none text-black p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              className="outline-persian-green-500  w-full text-base leading-none text-black p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              className="outline-persian-green-500  w-full text-base leading-none text-black p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
            />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              className="outline-persian-green-500  w-full text-base leading-none text-black p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
            />
            <button className=" w-full  bg-persian-green-500 hover:bg-persian-green-600 text-white font-normal mt-8  py-3 px-4  rounded">
              Submit
            </button>
            {done && " thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
