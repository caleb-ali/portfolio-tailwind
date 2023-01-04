import React, { useState } from "react";
import { useRef } from "react";
import { useFormInputValidation } from "react-form-input-validation";

import emailjs from "@emailjs/browser";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const Contactpage = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  

  //code below is for form validation to make sure all inputs are filled
  const [fields, errors, form,] = useFormInputValidation(
    {
      user_name: "",
      user_email: "",
      user_subject: "",
      message: "",
    },
    {
      user_name: "required",
      user_email: "required|email",
      user_subject: "required",
      message: "required",
    }
  );

  const onSubmit = async (event) => {
    const isValid = await form.validate(event);
    if (isValid) {
      // if form is filled them email.js send an email
      fields.user_name=('');
      fields.user_email=('');
      fields.user_subject=('');
      fields.message=('');
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
        
    }
  };

  return (
    <div id="contact">
      <div className="flex justify-center font-Redrose font-bold text-gray-500 text-2xl underline underline-offset-8 decoration-persian-green-600">
        Contact Me
      </div>
      <div className="lg:py-4 lg:px-8  lg:mt-8 lg:mb-[140px] mb-[40px] flex flex-col justify-center lg:flex-row lg:space-x-32  mx-auto ">
        <div className=" text-gray-900 font-Redrose mt-4">
          <h2 className=" hidden lg:block text-5xl text-left">
            Love to hear <br /> from you, <br /> Get in touch.
          </h2>
          <h2 className="block lg:hidden text-xl text-center mb-8">
            Love to hear from you, Get in touch.
          </h2>
          <div className="lg:mt-[50px] flex flex-row justify-center lg:justify-start items-center gap-4 text-3xl text-black">
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

        <div className="font-Redrose lg:py-4 lg:px-8 px-4  py-8 mx-auto max-w-screen-sm">
          <p className="text-gray-500">
            <span className="font-semibold text-persian-green-600 ">
              {" "}
              What's your story?
            </span>{" "}
            Always available for freelancing if the right
            <br className="hidden lg:block" /> projects comes along
          </p>

          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="myForm"
            noValidate
            autoComplete="off"
          >
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.user_name}
              className="outline-persian-green-500  w-full text-base leading-none text-black p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
            />
            <label className="error text-red text-xs">
              {errors.user_name ? errors.user_name : ""}
            </label>
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
             
              value={fields.user_subject}
              className="outline-persian-green-500  w-full text-base leading-none text-black p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
            />
            <label className="error text-red text-xs">
              {errors.user_subject ? errors.user_subject : ""}
            </label>
            <input
              placeholder="Email"
              name="user_email"
              type="email"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.user_email}
              className="outline-persian-green-500  w-full text-base leading-none text-black p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
            />
            <label className="error text-red text-xs">
              {errors.user_email ? errors.user_email : ""}
            </label>
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              onBlur={form.handleBlurEvent}
              onChange={form.handleChangeEvent}
              value={fields.message}
              className="outline-persian-green-500  w-full text-base leading-none text-black p-3 focus:oultine-none focus:border-white mt-4 bg-white border rounded border-gray-300 placeholder-gray-500"
            />
            <label className="error text-red text-xs">
              {errors.message ? errors.message : ""}
            </label>
            <button
              type="submit"
              className=" w-full  bg-persian-green-500 hover:bg-persian-green-600 text-white font-normal mt-8  py-3 px-4  rounded"
            >
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
