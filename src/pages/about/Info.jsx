import Heading from "../../components/Heading";
import InfoListItem from "../../components/InfoListItem";
import { MdCamera, MdPerson } from "react-icons/md";
import TextBadge from "../../components/TextBadge";

export default function Info() {
  return (
    <section className="info">
      <div className="info__container">
        <Heading size="2" cssClass="section-heading underline">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="badge__grid">
              <TextBadge>Photography</TextBadge>
              <TextBadge>Gaming</TextBadge>
              <TextBadge>Football</TextBadge>
              <TextBadge>Literature</TextBadge>
              <TextBadge>Working out</TextBadge>
              <TextBadge>Science</TextBadge>
              <TextBadge>Hiking</TextBadge>
              <TextBadge>Mindfulness</TextBadge>
              <TextBadge>Metaverse</TextBadge>
              <TextBadge>Psychology</TextBadge>
            </div>
          </div>
          <div>
            <Heading size="3" cssClass="sub-heading">
              <MdPerson />
              Attributes
            </Heading>
            <ul className="skill__list">
              <InfoListItem skill="Good work ethics" />
              <InfoListItem skill="Attention to detail" />
              <InfoListItem skill="Problem solver" />
              <InfoListItem skill="Enjoys learning" />
              <InfoListItem skill="Organized" />
              <InfoListItem skill="Good communicator" />
              <InfoListItem skill="Aesthetic sense" />
              <InfoListItem skill="Decent writer" />
              <InfoListItem skill="Takes responsibility" />
              <InfoListItem skill="Quality oriented" />
              <InfoListItem skill="Analytical skills" />
              <InfoListItem skill="Something" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
