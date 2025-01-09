import React from 'react';
import PropTypes from 'prop-types';
import CTA from './Cta';

const Teaser = ({ title, description, callToAction }) => {
  return (
    <div className="teaser h-screen flex items-center justify-center">
      <div className="cmp-teaser max-w-5xl mx-auto p-6"
        data-cmp-data-layer="">
        <div className="cmp-teaser__content flex flex-col gap-5 card text-center px-6 py-10">
          {/* Title */}
          <h2 className="cmp-teaser__title text-center lg:text-4xl text-3xl text-black font-semibold mx-auto">
            {title}
          </h2>
          {/* Description */}
          {description && (
            <div className="cmp-teaser__description text-gray-700 text-lg lg:text-2xl">
              {description}
            </div>
          )}

          {/* Call to Action */}
          {callToAction && (
            <div className="cmp-teaser__action-container">
              <CTA
                ctaText={callToAction}
                ctaLink="#"
                alignment="center"
                ctaStyle="primary"
                size="md"
                icon=""
                iconPosition="right"
                bgColor=""
                ariaLabel="Shop Now"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Default Props
Teaser.defaultProps = {
  title: 'Welcome to the Teaser Component!',
  description: 'A compelling description goes here',
  callToAction: 'Get Started',
};

// Prop Types
Teaser.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  callToAction: PropTypes.string.isRequired,
};

export default Teaser;
