import Heading from "../../components/common/Heading";
import PathSegment from "./PathSegment";
import { experienceData } from "../../constants/experienceData";
import { useState } from "react";
import PathToggleBtn from "./PathToggleBtn";

export default function Experience() {
  const [numToShow, setNumToShow] = useState(3);

  return (
    <section className="section-wrapper experience-section">
      <div className="path__wrapper">
        <Heading size="2" cssClass="section-heading path__heading">
          Work Experience
        </Heading>
        <div className="path__container">
          {experienceData.slice(0, numToShow).map((entry) => (
            <div key={entry.id} className="path__segment">
              <div className="path__vert-line"></div>
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
            </div>
          ))}
        </div>
      </div>
      <PathToggleBtn
        setNumToShow={setNumToShow}
        dataArr={experienceData}
      />
    </section>
  );
}
