import Heading from "../components/Heading";
import Biography from "./about/Biography";
import Info from "./about/Info";
import Contact from "./about/Contact";

export default function About() {
  return (
    <div className="main-layout">
      <Heading size="1" cssClass="page-heading">
        About.
      </Heading>
      <Biography />
      <Info />
      <Contact />
    </div>
  );
}
