import React from "react";
import { skillsImages } from "../utils/constants";

interface SkillsDataType {
  link: string;
  title: string;
}

const Skills = () => {
  return (
    <div className="flex flex-row text-center h-full skills" id="skills">
      <div className="w-1/2 flex flex-col justify-center break-words">
      <p className="font-bold text-4xl underline underline-offset-8 mb-8 text-primary-11">About me</p>
        <p className="font-medium	 text-2xl">
          Experienced frontend developer with 4+ years in JavaScript, HTML,
          CSS. Specializes in performance optimization, accessibility.
          Proficient in agile methodologies, JIRA management, code reviews.
          Passionate about technology, outdoor activities, travel, food, and
          music. Enthusiastic about capturing moments through photography while
          exploring diverse cultures and cuisines.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <div className="flex flex-wrap gap-6 justify-center">
          {skillsImages.map((skill: SkillsDataType) => (
            <div className="p-4 border-solid border-4 border-primary-4 rounded-xl w-36 box">
              <img src={skill.link} className="h-24" alt={skill.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
