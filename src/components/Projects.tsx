import React from "react";

const Projects = () => {
  return (
      <div className="relative flex justify-center h-full gap-4 flex-wrap py-8">
        {[1, 2, 3, 4].map((val) => (
          <div className="bg-primary-8 h-1/2 w-1/3 rounded-lg cursor-pointer">
            <div className="bg-primary-6 h-1/2 w-full"></div>
            <div className="flex flex-col justify-center items-center py-3">
              <h1 className="font-medium text-2xl text-center">
                lifeinvader social media app
              </h1>
              <a href="#" className="font-bold border-b-2 inline-block m-3">
                LIVE APP
              </a>
              <a href="#" className="font-bold border-b-2 inline-block m-1">
                LEARN MORE
              </a>
            </div>
          </div>
        ))}
      </div>
  );
};

export default Projects;
