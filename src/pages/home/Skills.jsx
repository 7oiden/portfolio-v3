import Heading from "../../components/common/Heading";
import { skillGroups } from "../../constants/skillsData";

export default function Skills() {
  return (
    <section className="skills section-wrapper">
      <div className="skills__heading-group">
        <p className="skills__kicker">Skills</p>
        <Heading size="3" cssClass="skills__heading">
          What I work with.
        </Heading>
      </div>
      <ul className="skills__groups">
        {skillGroups.map((group) => (
          <li key={group.label} className="skills__card">
            <h4 className="skills__card-label">{group.label}</h4>
            <ul className="skills__card-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
