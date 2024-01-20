import Heading from "../../components/Heading";
import { projectData } from "../../constants/projectData";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <section className="projects">
      <Heading size="2" cssClass="section-heading underline">
        Noroff School Projects
      </Heading>
      <div className="project__grid">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            type={project.type}
            date={project.date}
            image={project.image}
            description={project.description}
            siteUrl={project.netlify_url}
            codeUrl={project.github_url}
            tools={project.tools}
          />
        ))}
      </div>
    </section>
  );
}
