import Heading from "../components/Heading";
import Portfolio from "./projects/Portfolio";
import ProjectList from "./projects/ProjectList";

export default function Projects() {
  return (
    <div className="main-layout">
      <Heading size="1" cssClass="page-heading">
        Projects.
      </Heading>
      <Portfolio />
      <ProjectList />
    </div>
  );
}
