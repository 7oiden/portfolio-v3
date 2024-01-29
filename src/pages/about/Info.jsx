import Heading from "../../components/Heading";
import InfoListItem from "../../components/InfoListItem";
import { MdCamera, MdPerson } from "react-icons/md";
import TextBadge from "../../components/TextBadge";
import { hobbiesArr, attributesArr } from "../../constants/aboutData";

export default function Info() {
  return (
    <section className="info">
      <div className="section-wrapper">
        <Heading size="2" cssClass="section-heading">
          Info
        </Heading>
        <div className="info__grid">
          <div>
            <Heading size="3" cssClass="sub-heading">
              <MdCamera />
              Hobbies & Interests
            </Heading>
            <div className="paragraph-container">
              <p>
                Explore my hobbies and interests, where passion meets curiosity.
                Discover the things I love to do in my leisure time, offering a
                glimpse into the pursuits that inspire me beyond the digital
                realm.
              </p>
            </div>
            <div className="badge__grid">
              {hobbiesArr.map((hobby) => (
                <TextBadge key={hobby}>{hobby}</TextBadge>
              ))}
            </div>
          </div>
          <div className="info__grid-section-2">
            <Heading size="3" cssClass="sub-heading">
              <MdPerson />
              Attributes
            </Heading>
            <ul className="skill__list">
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
