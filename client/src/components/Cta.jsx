import React from "react";
import PropTypes from "prop-types";

const CTA = ({
    ctaText,
    ctaLink,
    alignment,
    ctaStyle,
    size,
    icon,
    iconPosition,
    bgColor,
    ariaLabel,
})=>{
    const baseClasses =`cmp-teaser__action-link inline-flex items-center justify-${alignment} font-bold transition-all rounded`;
    const sizeClasses =
      size === "lg"
        ? "px-6 py-3 text-lg"
        : size === "sm"
        ? "px-3 py-2 text-sm"
        : "px-4 py-2 text-md";
    const styleClasses =
      ctaStyle === "primary"
        ? "bg-blue-500 bg-success bg-primary text-white hover:bg-blue-600 hover:bg-success_dark"
        : ctaStyle === "secondary"
        ? "bg-gray-500 text-white hover:bg-gray-600"
        : ctaStyle === "tertiary"
        ? "bg-red-500 text-white hover:bg-red-600"
        : "";
    return(
        
          <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} ${sizeClasses} text-${alignment} bg-${ctaStyle} text-white hover:bg-${ctaStyle}_dark ${bgColor}`}
          aria-label={ariaLabel}
          role="button"
        >
          {icon && iconPosition === "left" && 
          <span className="mr-2">
            <img src={icon} alt="icon" className="w-5 h-5" />
          </span>}
          {ctaText}
          {icon && iconPosition === "right" && 
          <span className="ml-2">
            <img src={icon} alt="icon" className="w-5 h-5" />
          </span>}
        </a>
    )
}


CTA.propTypes = {
    ctaText: PropTypes.string.isRequired,
    ctaLink: PropTypes.string.isRequired,
    ctaStyle: PropTypes.oneOf(["primary", "secondary", "tertiary", "outline", "text"]),
    alignment: PropTypes.oneOf(["start", "center", "end"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(["left", "right"]),
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    ariaLabel: PropTypes.string,
  };
  
  CTA.defaultProps = {
    ctaStyle: "primary",
    alignment: "center",
    size: "md",
  };

export default CTA;