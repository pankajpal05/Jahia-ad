import React from "react";
import PropTypes from "prop-types";

const SectionContainer = ({ backgroundType, backgroundContent, children }) => {
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
          <div className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${backgroundContent})` }}
          ></div>
        );
      case "parallax":
        return (
          <div className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${backgroundContent})` }}
          ></div>
        );
      case "blank":
      default:
        return;
    }
  };

  // Adjust the section height for parallax backgrounds
  const sectionHeight =
    backgroundType === "parallax"
      ? "h-[1200px]"
      : backgroundType === "blank"
      ? ""
      : "h-[500px]";

  const sectionClasses = `w-full responsivegrid ${sectionHeight} flex items-center justify-center ${
    backgroundType !== "blank" ? "relative overflow-hidden " : ""
  }`;

  return (
    <section className={sectionClasses}>
      {/* Background Layer */}
      {renderBackground()}
      {/* Foreground Content */}
      <div className="cmp-container z-10 p-6 text-white bg-opacity-70 bg-black rounded-lg">
        {children}
      </div>
    </section>
  );
};

// Define PropTypes for validation
SectionContainer.propTypes = {
  backgroundType: PropTypes.oneOf(["video", "image", "parallax", "blank"]).isRequired,
  backgroundContent: PropTypes.string,
  children: PropTypes.node,
};

SectionContainer.defaultProps = {
  backgroundContent: "",
};

export default SectionContainer;
