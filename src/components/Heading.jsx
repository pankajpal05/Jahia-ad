import React from "react";
import PropTypes from "prop-types";

const Heading = ({ title, heading, description, alignment }) => {

  return (
    <div className={`lg:max-w-[1240px] mx-auto px-4 mb-6 text-${alignment} w-full`}>
      {title && (
        <h5 className={`text-sm font-semibold uppercase tracking-widest text-primary`}>
          {title}
        </h5>
      )}
      {heading && (
        <h2 className={`lg:text-4xl text-3xl text-black font-semibold mx-auto py-3`}>
          {heading}
        </h2>
      )}
      {description && (
        <div className={`text-gray-700 text-lg lg:text-xl`}>
          {description}
        </div>
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
