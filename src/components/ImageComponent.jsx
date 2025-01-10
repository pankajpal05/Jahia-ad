import React from "react";
import PropTypes from "prop-types";
const ImageComponent = ({ src, alt, width, height, className, href }) => {
  return (
    <>
      {href ? (
        <a href={href}>
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
          />
        </a>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      )}
    </>
  );
};

// Define PropTypes
ImageComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  href: PropTypes.string,
};

// Define default props
ImageComponent.defaultProps = {
  src: "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  alt: "Image",
  width: "100%",
  height: "auto",
  className: "",
  href: null,
};
// Export the component
export default ImageComponent;
