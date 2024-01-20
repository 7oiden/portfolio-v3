import Heading from "../../components/Heading";
import InfoListItem from "../../components/InfoListItem";

export default function Info() {
  return (
    <section className="skills">
      <Heading size="2" cssClass="section-heading underline">
        Info
      </Heading>
      <Heading size="3" cssClass="sub-heading">Attributes</Heading>
      <ul className="skill__list">
        <InfoListItem skill="Name: Rune Sætre" />
        <InfoListItem skill="Age: 41" />
        <InfoListItem skill="Location: Bergen" />
        <InfoListItem skill="Email:" />
      </ul>
    </section>
  );
}
