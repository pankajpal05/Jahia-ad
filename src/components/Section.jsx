import React from "react";

const Section = ({ backgroundType, backgroundContent, children }) => {
  const renderBackground = () => {
    switch (backgroundType) {
      case "video":
        return (
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover z-0">
            <source src={backgroundContent} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );

      case "image":
        return (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${backgroundContent})` }}></div>
        );

      case "parallax":
        return (
          <div
            className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${backgroundContent})` }}></div>
        );

      case "blank":
      default:
        return (
          <div className="absolute inset-0 w-full h-full bg-gray-100 z-0"></div>
        );
    }
  };

  const sectionHeight =
    backgroundType === "parallax" ? "h-[1200px]" : "h-[700px]";

  return (
    <section
      className={`relative w-screen ${sectionHeight} flex items-center justify-center overflow-hidden`}>
      {/* Background Layer */}
      {renderBackground()}
      {/* Foreground Content */}
      <div className="relative z-10 p-6 text-white bg-opacity-70 bg-black rounded-lg">
        {children}
      </div>
    </section>
  );
};

export default Section;
