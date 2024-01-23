import Heading from "../components/Heading";
import Experience from "./background/Experience";
import Education from "./background/Education";

export default function Background() {
  return (
    <>
      <Heading size="1" cssClass="page-heading">
        Background.
      </Heading>
      <Education />
      <Experience />
    </>
  );
}
