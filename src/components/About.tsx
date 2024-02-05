import React from "react";

const About = () => {
  return (
    <div className="px-60 text-center h-screen bg-primary-3 flex flex-col justify-center leading-8">
      <p className="text-2xl">
        Hi 👋, I&apos;m{" "}
        <span className="text-3xl text-primary-11 transition-opacity duration-300 hover:opacity-50 relative">
          Ankita Yadav
          <span className="absolute bottom-0 left-0 w-0.5 h-0.5 bg-primary-12 transition-transform duration-300 transform scale-x-0 hover:scale-x-100"></span>
        </span>
        , frontend developer with an experience of around more than{" "}
        <b className="text-2xl text-primary-11">2.5 + years</b>I have a great
        expertise in{" "}
        <b className="text-2xl text-primary-11">
          Javascript, HTML, CSS with different frameworks and libraries of
          javascript
        </b>
        , adding with good core knowledge of{" "}
        <b className="text-2xl text-primary-11">DOM and BOM</b>. I have worked
        on different sectors of Frontend development like{" "}
        <b className="text-2xl text-primary-11">
          performance, optimisation, accessibility, tracking, web sockets,
          architecture designings, writing test cases
        </b>{" "}
        with a good code coverage in different different kind of projects in a
        diversified culture along with a good handson on git. Also, I have
        worked in agile process where we plan sprints, maintain JIRA, code
        reviews, deployment cycle, documenting features.
      </p>
      <button className="bg-primary-5 hover:bg-primary-7 text-primary-11 font-bold py-4 px-4 rounded transition duration-300 transform hover:scale-105 w-56 self-center mt-10">
        Check about me!
      </button>
    </div>
  );
};

export default About;
