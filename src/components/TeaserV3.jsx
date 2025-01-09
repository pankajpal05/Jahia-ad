import React from "react";
import PropTypes from "prop-types";
import CTA from "./Cta";

export const TeaserV3 = ({ image, description, altText }) => {
  return (
    <div
      className="Teaser hover:bg-white mb-5 px-5 py-6 relative group cursor-pointer"
      tabIndex={0}
      role="region"
      aria-label="Teaser"
    >
      <div className="cmp-teaser__image">
        {image && (
          <img
            src={image}
            alt={altText}
            className="max-w-fit m-auto"
            tabIndex={0}
            aria-hidden={altText ? "false" : "true"}
          />
        )}
      </div>
      <div className="cmp-teaser__content">
        <div className="cmp-teaser__description">
          {description && <div className="cmp-teaser__description text-gray-700 text-lg lg:text-xl">{description}</div>}
        </div>
      </div>
      {/* <div className="cmp-action__container mt-2 flex justify-center opacity-0 -translate-x-[30%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
        <CTA  icon="./arrow.svg" iconPosition="right" />
      </div> */}
    </div>
  );
};

// Define default props
TeaserV3.defaultProps = {
  image:
    "https://cdn.ranosys.com/wp-content/uploads/2024/05/adobe-magento.webp", // Placeholder image as default
  description: "Default description for the teaser",
  altText: "Teaser image",
};

// Define prop types
TeaserV3.propTypes = {
  image: PropTypes.string,
  description: PropTypes.string,
  altText: PropTypes.string,
};

export default TeaserV3;
