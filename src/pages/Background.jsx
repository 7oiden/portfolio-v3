import Heading from "../components/common/Heading";
import CareerSection from "./background/CareerSection";
import ResumeLink from "./background/ResumeLink";
import { getExperienceData } from "../constants/experienceData";
import { getEducationData } from "../constants/educationData";
import { useLocale } from "../i18n/useLocale";

export default function Background() {
  const { locale, copy } = useLocale();
  const experienceData = getExperienceData(locale);
  const educationData = getEducationData(locale);

  return (
    <>
      <Heading size="1" cssClass="page-heading">
        {copy.career.pageTitle}
        <span className="page-heading__dot">.</span>
      </Heading>
      <section className="career career--intro section-wrapper">
        <div className="career__heading-group">
          <p className="career__kicker">{copy.career.kicker}</p>
          <Heading size="2" cssClass="career__heading">
            {copy.career.heading}
          </Heading>
        </div>
        <p className="career__lead">{copy.career.lead}</p>
        <ResumeLink />
      </section>
      <CareerSection kicker={copy.career.experience} entries={experienceData} />
      <CareerSection
        kicker={copy.career.education}
        entries={educationData}
        variant="education"
      />
    </>
  );
}
