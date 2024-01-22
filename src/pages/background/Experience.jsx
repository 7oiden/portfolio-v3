import Heading from "../../components/Heading";
import PathSegment from "./PathSegment";
import { experienceData } from "../../constants/experienceData";
import { useState } from "react";
import PathToggleBtn from "./PathToggleBtn";

export default function Experience() {
  const [numToShow, setNumToShow] = useState(3);

  return (
    <section>
      <Heading size="2" cssClass="section-heading underline">
        Work Experience
      </Heading>
      <div className="path__container">
        <div className="path__vert"></div>
        {experienceData.slice(0, numToShow).map((entry) => (
          <PathSegment
            key={entry.id}
            title={entry.title}
            date={entry.date}
            institution={entry.company}
            description={entry.description}
            url={entry.url}
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
