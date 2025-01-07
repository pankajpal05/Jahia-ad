import React from "react";
import PropTypes from "prop-types";

export const CardV4 = ({ title, description }) => {
  return (
    <div
      className="teaser my-5 shadow-custom-light px-5 py-8 rounded"
      role="region"
      aria-labelledby="teaser-title"
      tabIndex="0"
    >
      <div className="cmp-teaser">
        <div className="cmp-teaser__content text-center lg:max-w-[1240px] mx-auto">
          <h1
            id="teaser-title"
            className="cmp-teaser_title font-semibold text-xl"
          >
            {title}
          </h1>
          <div className="cmp-teaser_discription">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Default Props
CardV4.defaultProps = {
  title: "Default Title",
  description: "This is the default description for the card.",
};

// Prop Types
CardV4.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
