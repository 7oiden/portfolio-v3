import Heading from "../../components/Heading";
import PathSegment from "./PathSegment";
import { experienceData } from "../../constants/experienceData";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Experience() {
  const [showMore, setShowMore] = useState(false);
  const [numToShow, setNumToShow] = useState(3);

  function toggleShow() {
    setShowMore((prevShowMore) => !prevShowMore);
    setNumToShow(showMore ? 3 : experienceData.length);
  }

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
        <div className="show-button" onClick={toggleShow}>
          <FaChevronDown
            className={
              showMore ? "show-icon show-icon--up" : "show-icon show-icon--down"
            }
          />
          {showMore ? "Show Less" : "Show All"}
        </div>
      </div>
    </section>
  );
}
