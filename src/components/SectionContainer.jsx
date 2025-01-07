import React from "react";
import PropTypes from "prop-types";

const SectionContainer = ({ backgroundType, backgroundContent, heightClass, alignment, gridCols, children }) => {
  // Function to render the background based on the type
  const renderBackground = () => {
    switch (backgroundType) {
      case "video":
        return (
          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0" >
            <source src={backgroundContent} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "image":
        return (
          <img src={backgroundContent} className="absolute inset-0 w-full z-0" alt="" height={`${heightClass}px`}
          >
          </img>
        );
      case "parallax":
        return (
          <div
            className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${backgroundContent})` }} height={`${heightClass}px`}
          ></div>
        );
      case "blank":
      default:
        return;
    }
  };

  return (
    <section className={`py-12 w-full lg:max-w-[1240px] mx-auto px-4 text-${alignment}`}>
      {/* Background Layer */}
      {renderBackground()}
      {/* Foreground Content */}
      <div className={`${gridCols ? `grid grid-cols-1 lg:grid-cols-${gridCols} gap-4 ` : ""} cmp-container z-10 text-gray-900 ${backgroundType != 'blank' ? 'relative' :''}`}>
        {children}
      </div>
    </section>
  );
};

// Define PropTypes for validation
SectionContainer.propTypes = {
  backgroundType: PropTypes.oneOf(["video", "image", "parallax", "blank"]).isRequired,
  backgroundContent: PropTypes.string,
  heightClass: PropTypes.string,
  alignment: PropTypes.string,
  gridCols: PropTypes.string,
  children: PropTypes.node,
};

SectionContainer.defaultProps = {
  backgroundType: "blank",
  backgroundContent: "",
  heightClass: "",
  alignment: "center"
};

export default SectionContainer;
