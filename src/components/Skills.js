import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-auto mb-2 text-white">
          <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 01-.937-.171.75.75 0 11.374-1.453 5.261 5.261 0 002.626 0 .75.75 0 11.374 1.452 6.712 6.712 0 01-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
          <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.876zM9.754 22.344a.75.75 0 01.824-.668 13.682 13.682 0 002.844 0 .75.75 0 11.156 1.492 15.156 15.156 0 01-3.156 0 .75.75 0 01-.668-.824z" clipRule="evenodd" />
        </svg>
          <h1 className="text-yellow-200 title-font text-center text-2xl mb-10">
            Skills &amp; Technologies
          </h1>
          <ul className="list-disc text-sky-400/100 lg:mx-auto px-4 md:px-40">
            <li className="text-sky-400">In-depth understanding of the entire web development process (design, development, and deployment).</li>
            <li className="text-sky-400/90">Knowledge of SEO principles.</li>
            <li className="text-sky-400/90">Solid technical understanding of HTML and CSS, as well as abstraction languages like LESS/SASS</li>
            <li className="text-sky-400/90">Experience with front end UI frameworks like Bootstrap</li>
            <li className="text-sky-400/80">Experience in JavaScript.</li>
            <li className="text-sky-400/80">Knowledge of Node.js, npm, webpack, etc. and how to use them to optimize a build process.</li>
            <li className="text-sky-400/70">Solid experience building client-side application using React JS.</li>
            <li className="text-sky-400/70">Basic understanding of back-end technologies and how they integrate with front-end systems.</li>
            <li className="text-sky-400/60">Experience with code versioning tools like Git.</li>
            <li className="text-sky-400/50">Familiarity with browser testing and debugging.</li>
            <li className="text-sky-400/40">Ability to learn quickly and adapt to new technologies and frameworks.</li>
          </ul>
        </div>
        <div className="grid grid-rows-6 grid-cols-1 md:grid-rows-3 md:grid-cols-2 mx-auto mt-10 w-fit">
          {skills.map((skill) => (
            <div key={skill}>
              <div className="w-72 h-8 bg-gradient-to-r from-sky-500 to-indigo-500 mb-5 rounded py-1 px-4 ml-2 sm:ml-10 text-center flex flex-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-white mr-14">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
              </svg>
                <span className="font-medium text-white">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}