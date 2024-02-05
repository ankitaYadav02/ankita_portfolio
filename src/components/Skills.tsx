import React from "react";
import {
  langSkills,
  libFrameWorkSkills,
  toolsSkills,
  othersSkills,
} from "../utils/consts";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center px-36">
      <h4 className="mt-5 mb-3 font-semibold">Programming Language</h4>
      <div className="flex flex-wrap gap-4 justify-center">
        {langSkills.map((skill: string) => (
          <div className="bg-primary-5 text-primary-9 font-semibold px-4 py-2 rounded-full inline-flex items-center min-w-40 text-center">
            <span className="text-sm mr-2 grow">{skill}</span>
          </div>
        ))}
      </div>
      <h6 className="mt-5 font-semibold">Libraries/Frameworks</h6>
      <div className="flex flex-wrap gap-4 justify-center">
        {libFrameWorkSkills.map((skill: string) => (
          <div className="bg-primary-5 text-primary-9 font-semibold px-4 py-2 rounded-full inline-flex items-center min-w-40 text-center">
            <span className="text-sm mr-2 grow">{skill}</span>
          </div>
        ))}
      </div>
      <h6 className="mt-5 mb-3 font-semibold">Tools</h6>
      <div className="flex flex-wrap gap-4 justify-center">
        {toolsSkills.map((skill: string) => (
          <div className="bg-primary-5 text-primary-9 font-semibold px-4 py-2 rounded-full inline-flex items-center min-w-40 text-center">
            <span className="text-sm mr-2 grow">{skill}</span>
          </div>
        ))}
      </div>
      <h6 className="mt-5 mb-3 font-semibold">Other</h6>
      <div className="flex flex-wrap gap-4 justify-center">
        {othersSkills.map((skill: string) => (
          <div className="bg-primary-5 text-primary-9 font-semibold px-4 py-2 rounded-full inline-flex items-center min-w-40 text-center">
            <span className="text-sm mr-2 grow">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
