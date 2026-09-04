import Heading from "../../components/common/Heading";
import {
  schoolProjectData,
  realProjectData,
} from "../../constants/projectData";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <>
      <section className="projects section-wrapper">
        <div className="projects__heading-group">
          <p className="projects__kicker">Selected work</p>
          <Heading size="2" cssClass="projects__heading">
            Sites and apps for local businesses.
          </Heading>
        </div>
        <div className="project__grid">
          {realProjectData.map((project, index) => (
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
              featured={index === 0}
            />
          ))}
        </div>
      </section>
      <section className="projects projects--archive section-wrapper">
        <div className="projects__heading-group">
          <p className="projects__kicker">Archive</p>
          <Heading size="2" cssClass="projects__heading projects__heading--muted">
            Noroff school projects.
          </Heading>
        </div>
        <div className="project__grid project__grid--archive">
          {schoolProjectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              type={project.type}
              date={project.date}
              image={project.image}
              imageAlt={project.image_alt}
              description={project.description}
              codeUrl={project.github_url}
              tools={project.tools}
              compact
            />
          ))}
        </div>
      </section>
    </>
  );
}
