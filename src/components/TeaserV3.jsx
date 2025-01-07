import React from "react";
import PropTypes from "prop-types";
import CTA from "./Cta";

export const TeaserV3 = ({ img, description, altText }) => {
  return (
    <div 
      className="Teaser hover:bg-white mb-5 px-5 py-6 relative group " 
      tabIndex={0} 
      role="region" 
      aria-label="Teaser"
    >
      <div className="cmp-teaser__image">
        <img 
          src={img} 
          alt={altText} 
          className="max-w-[180px] m-auto" 
          tabIndex={0} 
          aria-hidden={altText ? "false" : "true"} 
        />
      </div>
      <div className="cmp-teaser__content">
        <div className="cmp-teaser__description">
          <p className="text-center">{description}</p>
        </div>
      </div>
      <div className="cmp-action__container mt-2 flex justify-center opacity-0 -translate-x-[30%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-in-out">
        <CTA ctaText="btn" />
      </div>
    </div>
  );
};

// Define default props
TeaserV3.defaultProps = {
  img: "https://cdn.ranosys.com/wp-content/uploads/2024/05/adobe-magento.webp", // Placeholder image as default
  description: "Default description for the teaser",
  altText: "Teaser image",
};

// Define prop types
TeaserV3.propTypes = {
  img: PropTypes.string,
  description: PropTypes.string,
  altText: PropTypes.string, 
};

export default TeaserV3;
