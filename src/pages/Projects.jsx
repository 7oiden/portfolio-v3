import Heading from "../components/common/Heading";
import ProjectList from "./projects/ProjectList";
import { useLocale } from "../i18n/useLocale";

export default function Projects() {
  const { copy } = useLocale();

  return (
    <>
      <Heading size="1" cssClass="page-heading">
        {copy.projects.pageTitle}
        <span className="page-heading__dot">.</span>
      </Heading>
      <ProjectList />
    </>
  );
}
