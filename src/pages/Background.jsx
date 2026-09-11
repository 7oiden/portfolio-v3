import Heading from "../components/common/Heading";
import CareerSection from "./background/CareerSection";
import ResumeLink from "./background/ResumeLink";
import { useLocale } from "../i18n/useLocale";

export default function Background() {
  const { copy } = useLocale();

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
      <CareerSection
        kicker={copy.career.experienceLabel}
        entries={copy.career.experience}
      />
      <CareerSection
        kicker={copy.career.educationLabel}
        entries={copy.career.education}
        variant="education"
      />
    </>
  );
}
