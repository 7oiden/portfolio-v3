import Heading from "../../components/Heading";
import PathSegment from "./PathSegment";
import { educationData } from "../../constants/educationData";
import { useState } from "react";

export default function Education() {
  const [showMore, setShowMore] = useState(false);
  const [numToShow, setNumToShow] = useState(3);

  function toggleShow() {
    setShowMore((prevShowMore) => !prevShowMore);
    setNumToShow(showMore ? 3 : educationData.length);
  }

  return (
    <section>
      <Heading size="2" cssClass="section-heading underline">
        Education & Training
      </Heading>
      <div className="path__container">
        <div className="path__vert"></div>
        {educationData.slice(0, numToShow).map((entry) => (
          <PathSegment
            key={entry.id}
            title={entry.title}
            date={entry.date}
            institution={entry.institution}
            description={entry.description}
            url={entry.url}
          />
        ))}
        <button className="show-button" onClick={toggleShow}>
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </section>
  );
}
