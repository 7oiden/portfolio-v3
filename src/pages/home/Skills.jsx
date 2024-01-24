import Heading from "../../components/Heading";
import { FaCode } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import IconBadge from "../../components/IconBadge";
import InfoListItem from "../../components/InfoListItem";
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
          Skills
        </Heading>
        <div className="skills__grid">
          <div className="skills__grid-section-1">
            <div>
              <Heading size="3" cssClass="sub-heading">
                <FaCode aria-hidden="true" className="sub-heading-icon" />
                Development
              </Heading>
              <div>
                <ul className="badge__list">
                  {developmentArr.map((skill) => (
                    <li key={skill}>
                      <IconBadge title={skill} />
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
              <ul className="badge__list">
                {designArr.map((skill) => (
                  <li key={skill}>
                    <IconBadge title={skill} />
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
              <ul className="skill__list">
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
              <ul className="skill__list">
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
