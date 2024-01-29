import Heading from "../../components/Heading";
import PathSegment from "./PathSegment";
import { educationData } from "../../constants/educationData";
import { useState } from "react";
import PathToggleBtn from "./PathToggleBtn";

export default function Education() {
  const [numToShow, setNumToShow] = useState(3);

  const slicedEducationData = educationData.slice(0, numToShow);

  return (
    <section className="section-wrapper">
      <div className="path__wrapper">
        <Heading size="2" cssClass="section-heading path__heading">
          Education & Training
        </Heading>
        <div className="path__container">
          <div className="path__vert"></div>
          {slicedEducationData.map((entry) => (
            <PathSegment
              key={entry.id}
              id={entry.id}
              title={entry.title}
              date={entry.date}
              institution={entry.institution}
              description={entry.description}
              url={entry.url}
              icon={entry.icon}
            />
          ))}
          <PathToggleBtn
            setNumToShow={setNumToShow}
            educationData={educationData}
          />
        </div>
      </div>
    </section>
  );
}
