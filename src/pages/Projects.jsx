import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { projectData } from "../constants/projectData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  console.log(projectData);
  return (
    <div className="main-layout">
      <Heading size="1" cssClass="page-heading">
        Projects.
      </Heading>
      <section className="portfolio">
        <Heading size="2" cssClass="section-heading underline">
          My Portfolio Site v3
        </Heading>
        <div className="paragraph-container">
          <p>
            This site was deployed to Netlify in January 2024, and are build in{" "}
            <em>React</em> and styled using <em>Sass</em>.
          </p>
          <p>
            For the contact form I am using Wordpress as headless CSM, and
            fetching the data trough the <em>Wordpress REST API</em>.
          </p>
          <p>
            Prior to coding the site was designed and prototyped in{" "}
            <em>Adobe XD</em>.
          </p>
        </div>
        <Link to="/about" className="link-container">
          <FaGithub className="brand-icon brand-icon--small" />
          GitHub <MdArrowForward className="link-icon" />
        </Link>
      </section>
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
              url={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
