import Heading from "../components/common/Heading";
import CareerSection from "./background/CareerSection";
import ResumeLink from "./background/ResumeLink";
import { experienceData } from "../constants/experienceData";
import { educationData } from "../constants/educationData";

export default function Background() {
  return (
    <>
      <Heading size="1" cssClass="page-heading">
        Background<span className="page-heading__dot">.</span>
      </Heading>
      <section className="career career--intro section-wrapper">
        <div className="career__heading-group">
          <p className="career__kicker">Career</p>
          <Heading size="2" cssClass="career__heading">
            Work and study.
          </Heading>
        </div>
        <p className="career__lead">
          Currently freelance, open to a full-time frontend role.
        </p>
        <ResumeLink />
      </section>
      <CareerSection kicker="Experience" entries={experienceData} />
      <CareerSection
        kicker="Education"
        entries={educationData}
        variant="education"
      />
    </>
  );
}
