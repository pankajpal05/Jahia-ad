import React from "react";
import PropTypes from "prop-types";

const Cta = ({
    ctaText,
    ctaLink,
    alignment,
})=>{
    return(
         <a href={ctaLink} className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {ctaText}
          </a>
    )
}

export default Cta;