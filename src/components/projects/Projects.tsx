import { ProjectsContainer, Grid } from "./Styles";
import { projects } from "../../data/projects";
import { Project } from "./Project/Project";

interface Technology {
  name: string;
  image: string;
  url: string;
}
export interface IProject {
  title: string;
  description: string;
  image: string;
  animationType: string;
  technologies: Technology[];
}

const Projects = () => {
  return (
    <ProjectsContainer className="container mx-auto w-full h-full projects overflow-hidden">
      <h1
        data-aos="fade-right"
        data-aos-offset="250"
        data-aos-duration="750"
        className="lg:font-bold font-medium md:text-5xl text-3xl lg:text-left text-center"
      >
        Portfolio
      </h1>
      <Grid>
        <Project projects={projects} />
      </Grid>
    </ProjectsContainer>
  );
};

export default Projects;
