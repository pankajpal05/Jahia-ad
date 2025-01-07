import React from "react";
import PropTypes from "prop-types";

const Heading = ({ title, heading, description, alignment }) => {

  return (
    <div className={`mb-6 text-${alignment}`}>
      {title && (
        <h5 className={`text-xs font-semibold uppercase tracking-widest text-primary}`}>
          {title}
        </h5>
      )}
      {heading && (
        <h2 className={`text-3xl font-bold my-2 text-dark}`}>
          {heading}
        </h2>
      )}
      {description && (
        <p className={`text-base "text-muted"}`}>
          {description}
        </p>
      )}
    </div>
  );
};

// Define PropTypes for validation
Heading.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  alignment: PropTypes.oneOf(["start", "center", "end"]),
};

Heading.defaultProps = {
    title: "",
    heading: "",
    description: "",
    alignment: "center"
};

export default Heading;
