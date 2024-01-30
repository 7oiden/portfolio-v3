import Heading from "../components/Heading";
import Experience from "./background/Experience";
import Education from "./background/Education";
import ResumeLink from "./background/ResumeLink";

export default function Background() {
  return (
    <>
      <Heading size="1" cssClass="page-heading">
        Background<span className="page-heading__dot">.</span>
      </Heading>
      <Education />
      <Experience />
      <ResumeLink />
    </>
  );
}
