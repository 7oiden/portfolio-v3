import Heading from "../components/Heading";
import Biography from "./about/Biography";
import Info from "./about/Info";
import Contact from "./about/Contact";

export default function About() {
  return (
    <>
      <Heading size="1" cssClass="page-heading">
        About<span className="page-heading__dot">.</span>
      </Heading>
      <Biography />
      <Info />
      <Contact />
    </>
  );
}
