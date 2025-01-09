import React from "react";
import PropTypes from "prop-types";

const Heading = ({ title, heading, description, alignment }) => {

  return (
    <div className={`lg:max-w-[1240px] mx-auto px-4 mb-6 text-${alignment} w-full`}>
      {title && (
        <h5 className={`text-xs font-semibold uppercase tracking-widest text-primary`}>
          {title}
        </h5>
      )}
      {heading && (
        <h2 className={`font-medium text-4xl lg:text-5xl my-3 text-dark`}>
          {heading}
        </h2>
      )}
      {description && (
        <p className={`text-base text-muted`}>
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
  alignment: PropTypes.oneOf(["left", "center", "right"]),
};

Heading.defaultProps = {
    title: "",
    heading: "",
    description: "",
    alignment: ""
};

export default Heading;
