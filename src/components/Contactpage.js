import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <div className="font-Redrose mb-56 lg:mb-[140px] lg:mt-[60px] lg:py-4 px-8 py-8 mx-auto max-w-screen-md">
      <p className="text-gray-700">
        <span className="font-semibold text-persian-green-600 ">
          {" "}
          What's your story?
        </span>{" "}
        Get in touch. Always available for freelancing if <br /> the right
        projects comes along
      </p>

      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="user_name"
          className="  w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
         
        />
        <input type="text" placeholder="Subject" name="user_subject" className="  w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"/>
        <input type="text" placeholder="Email" name="user_email" className="  w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"/>
        <textarea rows="5" placeholder="Message" name="message" className="  w-full text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"/>
        <button  className=" w-full  bg-gray-500 hover:bg-persian-green-600 text-white font-normal mt-8  py-3 px-4  rounded">Submit</button>
        {done && " thank you..."}
      </form>
    </div>
  );
};

export default Contactpage;
