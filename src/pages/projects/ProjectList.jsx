import Heading from "../../components/common/Heading";
import ProjectCard from "./ProjectCard";
import { useLocale } from "../../i18n/useLocale";

export default function ProjectList() {
  const { copy } = useLocale();
  const { selected, archive } = copy.projects;

  return (
    <>
      <section className="projects section-wrapper">
        <div className="projects__heading-group">
          <p className="projects__kicker">{copy.projects.selectedKicker}</p>
          <Heading size="2" cssClass="projects__heading">
            {copy.projects.selectedHeading}
          </Heading>
        </div>
        <div className="project__grid">
          {selected.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              type={project.type}
              date={project.date}
              image={project.image}
              imageAlt={project.imageAlt}
              description={project.description}
              siteUrl={project.siteUrl}
              codeUrl={project.githubUrl}
              tools={project.tools}
              featured={index === 0}
            />
          ))}
        </div>
      </section>
      <section className="projects projects--archive section-wrapper">
        <div className="projects__heading-group">
          <p className="projects__kicker">{copy.projects.archiveKicker}</p>
          <Heading size="2" cssClass="projects__heading projects__heading--muted">
            {copy.projects.archiveHeading}
          </Heading>
        </div>
        <div className="project__grid project__grid--archive">
          {archive.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              type={project.type}
              date={project.date}
              image={project.image}
              imageAlt={project.imageAlt}
              description={project.description}
              codeUrl={project.githubUrl}
              tools={project.tools}
              compact
            />
          ))}
        </div>
      </section>
    </>
  );
}
