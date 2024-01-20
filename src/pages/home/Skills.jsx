import Heading from "../../components/Heading";
import { FaCode } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import SkillBadge from "./SkillBadge";
import SkillListItem from "./SkillListItem";

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
                <SkillBadge title="HTML5" />
              </li>
              <li>
                <SkillBadge title="CSS3" />
              </li>
              <li>
                <SkillBadge title="JSE6" />
              </li>
              <li>
                <SkillBadge title="React" />
              </li>
              <li>
                <SkillBadge title="Next.js" />
              </li>
              <li>
                <SkillBadge title="Wordpress" />
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
                <SkillBadge title="Adobe XD" />
              </li>
              <li>
                <SkillBadge title="Figma" />
              </li>
              <li>
                <SkillBadge title="Photoshop" />
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
              <SkillListItem skill="Git + GitHub" />
              <SkillListItem skill="VS Code" />
              <SkillListItem skill="Postman" />
              <SkillListItem skill="Hotjar" />
              <SkillListItem skill="Strapi" />
              <SkillListItem skill="Heroku" />
              <SkillListItem skill="Firebase" />
              <SkillListItem skill="Sass" />
              <SkillListItem skill="Bootstrap" />
            </ul>
          </div>
          <div>
            <Heading size="3" cssClass="sub-heading">
              <FaLightbulb aria-hidden="true" className="sub-heading-icon" />
              Knowledge
            </Heading>
            <ul className="skill__list">
              <SkillListItem skill="Design Principles" />
              <SkillListItem skill="Interaction Design" />
              <SkillListItem skill="UI Design" />
              <SkillListItem skill="UX Design" />
              <SkillListItem skill="Responsive Design " />
              <SkillListItem skill="Prototyping" />
              <SkillListItem skill="Accessability" />
              <SkillListItem skill="SEO" />
              <SkillListItem skill="Project Methodology" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
