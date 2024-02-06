import Heading from "../../components/common/Heading";
import { FaCode } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import IconBadge from "./SkillBadge";
import InfoListItem from "../../components/common/InfoListItem";
import {
  designArr,
  developmentArr,
  toolsArr,
  knowledgeArr,
} from "../../constants/skillsData";

export default function Skills() {
  return (
    <section className="skills">
      <div className="section-wrapper">
        <Heading size="2" cssClass="section-heading">
          My skills
        </Heading>
        <div className="skills__grid">
          <div className="skills__grid-section-1">
            <div>
              <Heading size="3" cssClass="sub-heading">
                <FaCode aria-hidden="true" className="sub-heading-icon" id="code-icon" />
                Development
              </Heading>
              <div>
                <ul className="skills__badge-list">
                  {developmentArr.map((skill) => (
                    <li key={skill.title}>
                      <IconBadge title={skill.title} icon={skill.icon} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <Heading size="3" cssClass="sub-heading">
                <FaPencilRuler
                  aria-hidden="true"
                  className="sub-heading-icon"
                />
                Design
              </Heading>
              <ul className="skills__badge-list">
                {designArr.map((skill) => (
                  <li key={skill.title}>
                    <IconBadge title={skill.title} icon={skill.icon} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="skills__grid-section-2">
            <div>
              <Heading size="3" cssClass="sub-heading">
                <FaTools aria-hidden="true" className="sub-heading-icon" />
                Tools
              </Heading>
              <ul className="skills__list">
                {toolsArr.map((tool) => (
                  <InfoListItem key={tool} skill={tool} />
                ))}
              </ul>
            </div>
            <div>
              <Heading size="3" cssClass="sub-heading">
                <FaLightbulb aria-hidden="true" className="sub-heading-icon" />
                Knowledge
              </Heading>
              <ul className="skills__list">
                {knowledgeArr.map((skill) => (
                  <InfoListItem key={skill} skill={skill} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
