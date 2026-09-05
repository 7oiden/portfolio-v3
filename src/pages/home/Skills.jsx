import Heading from "../../components/common/Heading";
import { getSkillGroups } from "../../constants/skillsData";
import { useLocale } from "../../i18n/useLocale";

export default function Skills() {
  const { locale, copy } = useLocale();
  const skillGroups = getSkillGroups(locale);

  return (
    <section className="skills section-wrapper">
      <div className="skills__heading-group">
        <p className="skills__kicker">{copy.home.skills.kicker}</p>
        <Heading size="3" cssClass="skills__heading">
          {copy.home.skills.heading}
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
