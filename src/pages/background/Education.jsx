import Heading from "../../components/common/Heading";
import PathSegment from "./PathSegment";
import { educationData } from "../../constants/educationData";
import { useState } from "react";
import PathToggleBtn from "./PathToggleBtn";

export default function Education() {
  const [numToShow, setNumToShow] = useState(3);

  const slicedDataArr = educationData.slice(0, numToShow);

  return (
    <section className="section-wrapper experience-section">
      <div className="path__wrapper">
        <Heading size="2" cssClass="section-heading path__heading">
          Education & Training
        </Heading>
        <div className="path__container">
          {slicedDataArr.map((entry) => (
            <div key={entry.id} className="path__segment">
              {/* <div className="path__vert-line"></div> */}
              <PathSegment
                id={entry.id}
                key={entry.id}
                title={entry.title}
                date={entry.date}
                institution={entry.institution}
                description={entry.description}
                url={entry.url}
                icon={entry.icon}
              />
            </div>
          ))}
        </div>
        <PathToggleBtn
          setNumToShow={setNumToShow}
          dataArr={educationData}
        />
      </div>
    </section>
  );
}
