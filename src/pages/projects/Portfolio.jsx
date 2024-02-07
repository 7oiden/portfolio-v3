import Heading from "../../components/common/Heading";
import LinkBtn from "../../components/common/LinkBtn";

export default function Portfolio() {
  return (
    <section className="portfolio section-wrapper">
      <Heading size="2" cssClass="section-heading">
        My Portfolio v3
      </Heading>
      <div className="paragraph-container mw">
        <p>
          This site was deployed to Netlify in January 2024, and are build in{" "}
          <em>React</em> and styled using <em>Sass</em>. For the contact form I
          am using a <em>Strapi API</em> hosted on <em>Heroku</em>.
        </p>
        <p>
          Prior to coding the site was designed and prototyped in{" "}
          <em>Adobe XD</em>. All components are custom made, and the site is
          fully responsive.
        </p>
      </div>
      <LinkBtn
        url="https://github.com/7oiden/portfolio-v3.git"
        icon
        size="lg"
        position="left"
      >
        GitHub
      </LinkBtn>
    </section>
  );
}
