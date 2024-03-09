import React from "react";

const About = () => {
  return (
    <div className="px-60 text-center h-screen bg-primary-3 flex flex-col justify-center leading-8">
      <p className="text-5xl font-light">
        Hi 👋, I&apos;m{" "}
        <span className="text-6xl text-primary-11 transition-opacity duration-300 hover:opacity-50 relative">
          Ankita Yadav.
          <span className="absolute bottom-0 left-0 w-0.5 h-0.5 bg-primary-12 transition-transform duration-300 transform scale-x-0 hover:scale-x-100"></span>
        </span>
      </p>
      <p className="text-5xl font-light mt-3">I am a Software Engineer</p>
      <button className="bg-primary-5 hover:bg-primary-7 text-primary-11 font-bold py-4 px-4 rounded transition duration-300 transform hover:scale-105 w-56 self-center mt-10">
        <a href="/skills"> Check about me!</a>
      </button>
    </div>
  );
};

export default About;
