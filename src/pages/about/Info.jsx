import Heading from "../../components/common/Heading";
import TextBadge from "../../components/common/TextBadge";
import { hobbiesArr, attributesArr } from "../../constants/aboutData";

export default function Info() {
  return (
    <section className="info section-wrapper">
      <div className="info__heading-group">
        <p className="info__kicker">Personal profile</p>
        <Heading size="2" cssClass="info__heading">
          A bit more about me.
        </Heading>
      </div>
      <div className="info__groups">
        <article className="info__card">
          <h3 className="info__card-label">Interests</h3>
          <div className="info__card-body">
            <p>
              I keep a wide range of interests — it keeps the mind sharp and the
              work less one-note.
            </p>
            <div className="badge-grid">
              {hobbiesArr.map((hobby) => (
                <TextBadge key={hobby}>{hobby}</TextBadge>
              ))}
            </div>
          </div>
        </article>
        <article className="info__card">
          <h3 className="info__card-label">How I work</h3>
          <ul className="info__card-list">
            {attributesArr.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
