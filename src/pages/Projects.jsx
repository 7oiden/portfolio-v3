import Heading from "../components/Heading";

export default function Projects() {
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
      </section>
    </div>
  );
}
