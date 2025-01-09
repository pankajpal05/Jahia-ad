import React from "react";
import PropTypes from "prop-types";

const TeaserV2 = (props) => {
  const { preTitle, title, image, callToAction } = props;

  return (
    <div className="teaser flex-1 object-contain bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${image})`,
      }}
      role="region"
      aria-labelledby="teaser-title"
      tabIndex="0"
    >
      <div id="teaser-66129ff9d4" className="cmp-teaser bg-cover">
        <div className="cmp-teaser__content lg:py-[7rem] lg:px-[3.5rem] py-[4rem] px-[1rem]">
          <p
            className="cmp-teaser__pretitle font-sans text-gray-200 uppercase font-medium"
            aria-label={preTitle}
          >
            {preTitle}
          </p>
          <h2 className="cmp-teaser__title text-center lg:text-4xl text-3xl text-black font-semibold mx-auto">
            {title}
          </h2>
          <div className="cmp-teaser__action-container">
            <a
              href="#"
              className="cmp-teaser__action-link font-sans bg-black text-white inline-block px-6 py-3 mt-5 rounded-md font-semibold hover:bg-[#d90a2c]"
              id="teaser-3a8e3acfdb-cta-641eff4586"
              aria-label={callToAction}
              tabIndex="0"
            >
              {callToAction}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define prop types for validation
TeaserV2.propTypes = {
  preTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
};

// Set default props
TeaserV2.defaultProps = {
  preTitle: "Default PreTitle",
  title: "Default Title",
  imgUrl:
    "https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-23/oh__img135.jpg",
  callToAction: "Learn More",
};

export default TeaserV2;
