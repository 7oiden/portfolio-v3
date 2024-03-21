import Heading from "../../components/common/Heading";
import { schoolProjectData, realProjectData } from "../../constants/projectData";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <>
      <section className="projects section-wrapper mb">
        <Heading size="2" cssClass="section-heading">
          Real World Projects
        </Heading>
        <div className="project__grid">
          {realProjectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              type={project.type}
              date={project.date}
              image={project.image}
              imageAlt={project.image_alt}
              description={project.description}
              tools={project.tools}
            />
          ))}
        </div>
      </section>
      <section className="projects section-wrapper">
        <Heading size="2" cssClass="section-heading">
          Noroff School Projects
        </Heading>
        <div className="project__grid">
          {schoolProjectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              type={project.type}
              date={project.date}
              image={project.image}
              imageAlt={project.image_alt}
              description={project.description}
              siteUrl={project.netlify_url}
              codeUrl={project.github_url}
              tools={project.tools}
            />
          ))}
        </div>
      </section>
    </>
  );
}
