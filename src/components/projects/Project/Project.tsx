/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";

import { IProject } from "../Projects";
import { Description, Technology } from "./Styles";
import { BiLinkExternal as Source } from "react-icons/bi";

interface IProjects {
  projects: IProject[];
}

const ProjectItem: React.FC<IProject> = ({
  title,
  description,
  image,
  technologies,
  animationType,
}: IProject) => (
  <div className="item">
    <h1
      className="font-medium md:text-3xl text-2xl"
      data-aos={animationType}
      data-aos-offset="250"
    >
      {title}
    </h1>
    <img
      src={image}
      alt="project"
      className="w-full my-5 transition-all"
      data-aos={animationType}
      data-aos-offset="200"
    />
    <Description
      className="text-md font-light"
      data-aos={animationType}
      data-aos-offset="200"
    >
      {description}
    </Description>
    <h1
      className="font-semibold text-lg mb-5"
      data-aos={animationType}
      data-aos-offset="150"
    >
      Użyte technologie:
    </h1>
    <div
      className="flex items-center min-w-2 flex-wrap lg:justify-start justify-center"
      data-aos={animationType}
      data-aos-offset="150"
    >
      {technologies.map((technology) => {
        return (
          <>
            <Technology
              className="mx-2 flex flex-col justify-between"
              key={technology.name}
            >
              <div className="flex items-center justify-center">
                <p className="mr-2">{technology.name}</p>
                <a href={technology.url} target="_blank">
                  <Source />
                </a>
              </div>

              <img
                src={technology.image}
                alt="logo"
                className="2xl:w-20 xl:w-14 lg:w-20 w-10 my-3 text-center mx-auto"
              />
            </Technology>
          </>
        );
      })}
    </div>
  </div>
);

export const Project: React.FC<IProjects> = ({ projects }: IProjects) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <ProjectItem
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            key={project.title}
            animationType={project.animationType}
          />
        );
      })}
    </>
  );
};
