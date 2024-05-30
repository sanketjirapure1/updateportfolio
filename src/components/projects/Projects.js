import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="baget calculator"
          des="The chief benefit of a budget calculator is that by using it regularly, you see the upside of saving more and spending less!"
          src={projectOne}
          icon={
            <a href="https://linkedin.com/in/sanket-jirapure1" target="_blank">
              {" "}
              <BsGithub />
            </a>
          }
          icon1={
            <a href="https://todobackbone.netlify.app" target="_blank">
              {" "}
              <FaGlobe />
            </a>
          }
        />
        <ProjectsCard
          title="todo backbone"
          des="In this application we will develop a simple ToDo application which supports adding, editing, and removing tasks."
          src={projectTwo}
          icon={
            <a href="https://linkedin.com/in/sanket-jirapure1" target="_blank">
              {" "}
              <BsGithub />
            </a>
          }
          icon1={
            <a href="https://todobackbone.netlify.app" target="_blank">
              {" "}
              <FaGlobe />
            </a>
          }
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" To improve your chance of sealing the deal in the final checkout process on your website, be sure to make the
           purchasing."
          src={projectOne}
          icon={
            <a href="https://linkedin.com/in/sanket-jirapure1" target="_blank">
              {" "}
              <BsGithub />
            </a>
          }
          icon1={
            <a href="https://todobackbone.netlify.app" target="_blank">
              {" "}
              <FaGlobe />
            </a>
          }
        />
      </div>
    </section>
  );
};

export default Projects;
