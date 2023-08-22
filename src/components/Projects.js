
import React from "react";
import { projects } from "../data";



export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-3 py-10 mx-auto text-center lg:px-30 mb-6">
        <div className="flex flex-col w-full mb-5 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white mb-2">
           <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clipRule="evenodd" />
          </svg>
          <h1 className="sm:text-4xl text-3xl font-medium text-white">
            Apps I've Built
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap ">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2  w-110  p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute w-full h-full object-cover  object-center inset-0"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full bg-gray-900 opacity-40 hover:opacity-80">
                  <h1 className="title-font text-lg font-medium text-white text-center">
                    {project.title}
                  </h1>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}