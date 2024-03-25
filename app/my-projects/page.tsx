import ProjectCard from "../../components/ProjectCard";
import { Projects } from "../../contants";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/Mountains.jpg)" }}
      className=" h-screen flex items-center justify-center bg-center bg-cover"
    >
      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-5 max-w-[40%] md:max-w-[90%] max-h-[90%]">
        {Projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
