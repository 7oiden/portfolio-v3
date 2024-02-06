import Heading from "../../components/common/Heading";
import InfoListItem from "../../components/common/InfoListItem";
import { MdCamera, MdPerson } from "react-icons/md";
import TextBadge from "../../components/common/TextBadge";
import { hobbiesArr, attributesArr } from "../../constants/aboutData";

export default function Info() {
  return (
    <section className="info">
      <div className="section-wrapper">
        <Heading size="2" cssClass="section-heading">
          Personal profile
        </Heading>
        <div className="info__grid">
          <div>
            <Heading size="3" cssClass="sub-heading">
              <MdCamera />
              Hobbies & Interests
            </Heading>
            <div className="paragraph-container">
              <p>
                With a curious mind and a passion for learning, I have always been taking interest in a wide range of themes. I believe that having a diverse set of interests can help to keep the mind sharp and the creativity flowing.
              </p>
            </div>
            <div className="badge-grid">
              {hobbiesArr.map((hobby) => (
                <TextBadge key={hobby}>{hobby}</TextBadge>
              ))}
            </div>
          </div>
          <div className="info__grid-section-2">
            <Heading size="3" cssClass="sub-heading">
              <MdPerson id="person-icon" />
              Attributes
            </Heading>
            <ul className="skills__list">
              {attributesArr.map((skill) => (
                <InfoListItem key={skill} skill={skill} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
