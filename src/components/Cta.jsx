import React from "react";
import PropTypes from "prop-types";

const CTA = ({
    ctaText,
    ctaLink,
    alignment,
    ctaStyle,
    icon,
    iconPosition,
    ariaLabel,
})=>{
    const baseClasses =`cmp-teaser__action-link inline-flex items-center justify-${alignment} font-bold transition-all rounded px-4 py-2 capitalize`;
    let styleClasses ="";
    if (ctaStyle === "primary" || ctaStyle === "secondary" || ctaStyle === "tertiary") {
      styleClasses = `bg-${ctaStyle} text-white hover:bg-${ctaStyle}_hover`;
  } else if (ctaStyle === "outline") {
      styleClasses = `border-2 border-${ctaStyle} text-white hover:text-black hover:bg-blue-100`;
  } else if (ctaStyle === "text") {
      styleClasses = "text-blue-500 hover:text-blue-700";
  } else {
      styleClasses = "";
  }
  
  console.log(styleClasses);
  
    return(
          <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`${baseClasses} text-${alignment} ${styleClasses}`}
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