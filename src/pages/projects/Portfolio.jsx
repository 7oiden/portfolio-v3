import Heading from "../../components/Heading";
import ProjectBtn from "./ProjectBtn";

export default function Portfolio() {
  return (
    <section className="portfolio section-wrapper">
      <Heading size="2" cssClass="section-heading">
        My Portfolio v3
      </Heading>
      <div className="paragraph-container">
        <p>
          This site was deployed to Netlify in January 2024, and are build in{" "}
          <em>React</em> and styled using <em>Sass</em>. For the contact form I
          am using Wordpress as headless CSM, and fetching the data trough the{" "}
          <em>Wordpress REST API</em>. Prior to coding the site was designed and
          prototyped in <em>Adobe XD</em>.
        </p>
      </div>
      <div className="button-container">
        <ProjectBtn
          icon="github"
          url="https://github.com/7oiden/portfolio-v3.git"
        >
          GitHub
        </ProjectBtn>
      </div>
    </section>
  );
}
