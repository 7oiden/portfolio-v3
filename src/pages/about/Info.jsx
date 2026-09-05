import Heading from "../../components/common/Heading";
import TextBadge from "../../components/common/TextBadge";
import { getAboutData } from "../../constants/aboutData";
import { useLocale } from "../../i18n/useLocale";

export default function Info() {
  const { locale, copy } = useLocale();
  const info = copy.about.info;
  const { hobbies, attributes } = getAboutData(locale);

  return (
    <section className="info section-wrapper">
      <div className="info__heading-group">
        <p className="info__kicker">{info.kicker}</p>
        <Heading size="2" cssClass="info__heading">
          {info.heading}
        </Heading>
      </div>
      <div className="info__groups">
        <article className="info__card">
          <h3 className="info__card-label">{info.interests}</h3>
          <div className="info__card-body">
            <p>{info.interestsIntro}</p>
            <div className="badge-grid">
              {hobbies.map((hobby) => (
                <TextBadge key={hobby}>{hobby}</TextBadge>
              ))}
            </div>
          </div>
        </article>
        <article className="info__card">
          <h3 className="info__card-label">{info.howIWork}</h3>
          <ul className="info__card-list">
            {attributes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
