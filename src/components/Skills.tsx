import Header from "./Header.astro";
import React from "react";
import Footer from "./Footer.astro";
import { SITE_TITLE } from "../consts";

const Skills = () => {
  return (
    <>
      <div className="wrapper">
        {/* <div className={"skills, blue"}>
          <span>Javascript</span>
        </div> */}
        <div className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full inline-flex items-center">
  <span className="text-sm mr-2">Chip Text</span>
  <button className="focus:outline-none">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  </button>
</div>
      </div>
      <div className="wrapper">
        <div className={"skills, green"}>
          <span>Reactjs</span>
        </div>
      </div>
    </>
  );
};

export default Skills;
