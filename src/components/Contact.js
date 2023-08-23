import React from "react";
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser"


export default function Contact() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);
  

  useEffect(()=> emailjs.init("iHOWWLstnDHzdHPyA"), []);

 const handleSubmit = async (e) => {
  e.preventDefault();
  const serviceId="vv333771";
  const templateId="template_yhcm0qv";
  try{
    setLoading(true);
    await emailjs.send(serviceId, templateId, {
      name: nameRef.current.value,
      emaill: emailRef.current.value,
      message: messageRef.current.value,
    });
    alert("email successfully sent");
  } catch(error){
    console.log(error);
  } finally {
    setLoading(false);
  };
 };






  return (
    <section id="contact" className="relative">
      <div className="container px-3 sm:px-5 py-10 mx-auto flex flex-row lg:flex-nowrap  max-md:flex-wrap items-center">
        <div className="relative w-1/2 lg:w-2/3 rounded overflow-hidden p-10  flex items-end justify-start min-w-fit m-auto">
          <div className="z-10 text-white bg-gray-700 rounded py-5 px-5 min-w-fit flex flex-col flex-nowrap shadow-md min-w-fit min-h-fit ">
            <div className=""> 
              <h2 className="text-white text-xs ">
                LOCATION:
              </h2>
              <p className="text-indigo-300 mb-1">
                Houston, 77082
              </p>
            </div>
            <div>
              <h2 className="text-white text-xs">
                EMAIL:
              </h2>
              <a className="text-base  text-indigo-300 mb-1" href="mailto:valentynaastrakhovych@gmail.com">
                valentynaastrakhovych@gmail.com
              </a>
              <h2 className="text-white text-xs mt-1">
                PHONE:
              </h2>
              <a href="tel:18329337309" className="text-indigo-300">832-933-7309</a>
            </div>
          </div>
        </div>
        <form
          name="contact"
          onSubmit={handleSubmit}
          className="w-1/2 flex flex-col w-full ">
          <h2 className="text-white text-3xl sm:text-4xl mb-1 font-medium">
            Hire Me
          </h2>
          <p >
          
          </p>
          <div className="relative mb-4">
            <label htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="bg-gray-800 rounded w-full border border-gray-700 text-base outline-none text-gray-100 px-2 required"
              ref={nameRef}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              className="bg-gray-800 rounded w-full border border-gray-700 text-base outline-none text-gray-100 px-2 required"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={"4"}
              className="bg-gray-800 rounded w-full border border-gray-700 text-base outline-none text-gray-100 placeholder:italic placeholder:text-slate-400 placeholder:text-sm px-2"
              placeholder="Your message..."
              ref={messageRef}
            />
          </div>
          <button
            type="submit"
            className="w-full border-0 py-2 px-6 bg-sky-500 focus:outline-none hover:bg-indigo-500 rounded text-lg text-white"
            disabled={loading}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}