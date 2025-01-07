import React from "react";
import PropTypes from "prop-types";
import CTA from "./Cta";

const Hero = ({
  title,
  subtitle,
  description,
  theme,
  backgroundType,
  backgroundContent,
  alignment,
}) => {
  const renderBackground = () => {
    switch (backgroundType) {
      case "video":
        return (
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={backgroundContent} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "image":
        return (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${backgroundContent})` }}
          ></div>
        );
      case "color":
      default:
        return (
          <div
            className="absolute inset-0 w-full h-full z-0"
            style={{ backgroundColor: backgroundContent }}
          ></div>
        );
    }
  };

  const textColor = theme === "dark" ? "text-white" : "text-gray-800";

  return (
    <div className={`relative w-full h-screen flex items-center justify-${alignment} overflow-hidden`}>
      {/* Background */}
      {renderBackground()}

      {/* Content */}
      <div
        className={`relative lg:max-w-[1240px] mx-auto z-10 px-4 py-12 text-${alignment} max-w-3xl ${textColor}`}
      >
        <h1 className="text-3xl lg:text-4xl font-semibold mb-4">{title}</h1>
        {subtitle && <h2 className="text-xl lg:text-2xl font-normal mb-4">{subtitle}</h2>}
        {description && <p className="text-lg mb-6">{description}</p>}
        <CTA 
            ctaText="Get Started"
            ctaLink="#"
            alignment="center"
            ctaStyle="primary"
            size="md"
            icon=""
            iconPosition=""
            bgColor=""
            ariaLabel="Get Started"
        />
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark"]),
  backgroundType: PropTypes.oneOf(["image", "video", "color"]),
  backgroundContent: PropTypes.string,
  alignment: PropTypes.string,
};

Hero.defaultProps = {
  subtitle: "",
  description: "",
  ctaText: "",
  ctaLink: "",
  theme: "light",
  backgroundType: "color",
  backgroundContent: "#f3f4f6",
  alignment: "center",
};

export default Hero;
