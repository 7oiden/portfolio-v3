import PropTypes from "prop-types";
import CareerEntry from "./CareerEntry";

export default function CareerSection({ kicker, entries, variant }) {
  const className =
    variant === "education"
      ? "career career--education section-wrapper"
      : "career section-wrapper";

  return (
    <section className={className}>
      <p className="career__kicker">{kicker}</p>
      <ol className="career__list">
        {entries.map((entry) => (
          <CareerEntry key={entry.id} {...entry} />
        ))}
      </ol>
    </section>
  );
}

CareerSection.propTypes = {
  kicker: PropTypes.string.isRequired,
  entries: PropTypes.arrayOf(PropTypes.object).isRequired,
  variant: PropTypes.string,
};
