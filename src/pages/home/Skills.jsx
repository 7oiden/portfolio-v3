import Heading from "../../components/Heading";
import { FaCode } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import IconBadge from "../../components/IconBadge";
import InfoListItem from "../../components/InfoListItem";

export default function Skills() {
  return (
    <section className="skills">
      <div className="skills__container">
        <Heading size="2" cssClass="section-heading underline">
          Skills
        </Heading>
        <div className="skills__grid">
          <div>
            <Heading size="3" cssClass="sub-heading">
              <FaCode aria-hidden="true" className="sub-heading-icon" />
              Development
            </Heading>
            <ul className="badge__list">
              <li>
                <IconBadge title="HTML5" />
              </li>
              <li>
                <IconBadge title="CSS3" />
              </li>
              <li>
                <IconBadge title="JSE6" />
              </li>
              <li>
                <IconBadge title="React" />
              </li>
              <li>
                <IconBadge title="Next.js" />
              </li>
              <li>
                <IconBadge title="Wordpress" />
              </li>
            </ul>
          </div>
          <div>
            <Heading size="3" cssClass="sub-heading">
              <FaPencilRuler aria-hidden="true" className="sub-heading-icon" />
              Design
            </Heading>
            <ul className="badge__list">
              <li>
                <IconBadge title="Adobe XD" />
              </li>
              <li>
                <IconBadge title="Figma" />
              </li>
              <li>
                <IconBadge title="Photoshop" />
              </li>
            </ul>
          </div>
          <hr className="divider" />
          <div>
            <Heading size="3" cssClass="sub-heading">
              <FaTools aria-hidden="true" className="sub-heading-icon" />
              Tools
            </Heading>
            <ul className="skill__list">
              <InfoListItem skill="Git + GitHub" />
              <InfoListItem skill="VS Code" />
              <InfoListItem skill="Postman" />
              <InfoListItem skill="Hotjar" />
              <InfoListItem skill="Strapi" />
              <InfoListItem skill="Heroku" />
              <InfoListItem skill="Firebase" />
              <InfoListItem skill="Sass" />
              <InfoListItem skill="Bootstrap" />
            </ul>
          </div>
          <div>
            <Heading size="3" cssClass="sub-heading">
              <FaLightbulb aria-hidden="true" className="sub-heading-icon" />
              Knowledge
            </Heading>
            <ul className="skill__list">
              <InfoListItem skill="Design Principles" />
              <InfoListItem skill="Interaction Design" />
              <InfoListItem skill="UI Design" />
              <InfoListItem skill="UX Design" />
              <InfoListItem skill="Responsive Design " />
              <InfoListItem skill="Prototyping" />
              <InfoListItem skill="Accessability" />
              <InfoListItem skill="SEO" />
              <InfoListItem skill="Project Methodology" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
