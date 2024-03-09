import React from "react";
import { skillsImages } from "../utils/constants";

interface SkillsDataType {
  link: string;
  title: string;
}

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center px-48 h-full	">
      <div className="flex flex-wrap gap-6 justify-center">
        {skillsImages.map((skill: SkillsDataType) => (
          <div className="p-4 border-solid border-4 border-primary-4 rounded-xl w-36">
            <img src={skill.link} className="h-24" alt={skill.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
