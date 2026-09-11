import Heading from "../../components/common/Heading";
import { useLocale } from "../../i18n/useLocale";

export default function Skills() {
  const { copy } = useLocale();
  const skills = copy.home.skills;

  return (
    <section className="skills section-wrapper">
      <div className="skills__heading-group">
        <p className="skills__kicker">{skills.kicker}</p>
        <Heading size="3" cssClass="skills__heading">
          {skills.heading}
        </Heading>
      </div>
      <ul className="skills__groups">
        {skills.groups.map((group) => (
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
