import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ABSOLUTE_URL = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

function isAbsoluteUrl(href) {
  return typeof href === "string" && ABSOLUTE_URL.test(href);
}

export default function AppLink({ href, children, className, ...rest }) {
  if (!href) {
    return (
      <span className={className} {...rest}>
        {children}
      </span>
    );
  }

  if (isAbsoluteUrl(href)) {
    const opensInNewTab = /^https?:/i.test(href);

    return (
      <a
        href={href}
        className={className}
        {...rest}
        {...(opensInNewTab ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

AppLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
