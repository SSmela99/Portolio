import { ProjectsContainer } from "./Styles";
import { projects } from "../../data/projects";
import { Project } from "./Project/Project";

import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;

  @media (max-width: 1279px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1023px) {
    display: block;
  }

  .item {
    grid-column: span 2;
    padding: 20px;

    @media (max-width: 1023px) {
      padding: 0;
      margin: 30px 0;
    }
  }

  .item:last-child:nth-child(3n - 1) {
    grid-column-end: -2;
  }

  .item:nth-last-child(2):nth-child(3n + 1) {
    grid-column-end: 4;
  }

  .item:last-child:nth-child(3n - 2) {
    grid-column-end: 5;
  }
`;
interface Technology {
  name: string;
  image: string;
  url: string;
}
export interface IProject {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
}

const Projects = () => {
  return (
    <ProjectsContainer className="container mx-auto w-full h-full">
      <h1 className="lg:font-bold font-medium md:text-5xl text-3xl lg:text-left text-center">
        Portfolio
      </h1>
      <Grid className="">
        <Project projects={projects} />
      </Grid>
    </ProjectsContainer>
  );
};

export default Projects;
