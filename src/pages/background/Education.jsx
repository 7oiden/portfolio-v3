import Heading from "../../components/Heading";
import PathSegment from "./PathSegment";
import { educationData } from "../../constants/educationData";

export default function Education() {
  console.log(educationData);
  return (
    <section>
      <Heading size="2" cssClass="section-heading underline">
        Education & Training
      </Heading>
      <div className="path__container">
        <div className="path__vert"></div>
        {educationData.map((entry) => (
          <PathSegment
            key={entry.id}
            title={entry.title}
            date={entry.date}
            institution={entry.institution}
            description={entry.description}
            url={entry.url}
          />
        ))}
      </div>
    </section>
  );
}
