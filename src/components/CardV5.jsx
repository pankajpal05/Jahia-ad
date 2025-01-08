import React from "react";
import PropTypes from "prop-types";
const CardV5 = ({ title, description, stepNumber }) => {
  return (
    <div className="relative bg-white p-6 rounded-lg mt-10">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full text-lg font-bold">
        {stepNumber}
      </div>
      <h3 className="text-xl font-semibold text-black mt-6 mb-2 text-center">{title}</h3>
      <p className="text-black - text-center">{description}</p>
    </div>
  );
};
CardV5.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stepNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

// Set default props
CardV5.defaultProps = {
    title: "Default Title",
    description: "Default description content goes here.",
    stepNumber: 1,
  };
export default CardV5;
