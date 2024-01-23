import Heading from "../components/Heading";
import Portfolio from "./projects/Portfolio";
import ProjectList from "./projects/ProjectList";

export default function Projects() {
  return (
    <>
      <Heading size="1" cssClass="page-heading">
        Projects<span className="accent-dot">.</span>
      </Heading>
      <Portfolio />
      <ProjectList />
    </>
  );
}
