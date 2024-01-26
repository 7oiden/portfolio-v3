import Heading from "../../components/Heading";
import PathSegment from "./PathSegment";
import { experienceData } from "../../constants/experienceData";
import { useState } from "react";
import PathToggleBtn from "./PathToggleBtn";

export default function Experience() {
  const [numToShow, setNumToShow] = useState(3);

  return (
    <section className="section-wrapper experience-section">
      <Heading size="2" cssClass="section-heading path__heading">
        Work Experience
      </Heading>
      <div className="path__container">
        <div className="path__vert"></div>
        {experienceData.slice(0, numToShow).map((entry) => (
          <PathSegment
            id={entry.id}
            key={entry.id}
            title={entry.title}
            date={entry.date}
            institution={entry.company}
            description={entry.description}
            url={entry.url}
            icon={entry.icon}
          />
        ))}
        <PathToggleBtn
          setNumToShow={setNumToShow}
          educationData={experienceData}
        />
      </div>
    </section>
  );
}
