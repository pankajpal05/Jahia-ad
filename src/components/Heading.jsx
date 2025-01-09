"use client"

import React, { useEffect, useRef, useState }  from "react";
import PropTypes from "prop-types";

const Heading = ({ title, heading, description, alignment ,isAnimated="true"}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Adjust threshold to control when the animation triggers
    );
    if (ref.current) {      
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  return (
    <div  ref={ref} className={`lg:max-w-[1240px] mx-auto px-4 mb-6 text-${alignment} w-full ${isAnimated ?`opacity-0 -translate-y-[-20%] transition-all transform duration-700 ease-in-out ${
      isVisible ? "opacity-100 translate-y-0 scale-100" : "scale-90"
    } `:""} `}>
      {title && (
        <h5 className={`text-sm font-semibold uppercase tracking-widest text-primary`}>
          {title}
        </h5>
      )}
      {heading && (
        <h2 className={`lg:text-4xl text-3xl text-black font-semibold mx-auto py-3`}>
          {heading}
        </h2>
      )}
      {description && (
        <div className={`text-gray-700 text-lg lg:text-xl`}>
          {description}
        </div>
      )}
    </div>
  );
};

// Define PropTypes for validation
Heading.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  alignment: PropTypes.oneOf(["left", "center", "right"]),
};

Heading.defaultProps = {
    title: "",
    heading: "",
    description: "",
    alignment: ""
};

export default Heading;
