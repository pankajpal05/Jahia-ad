import React from 'react';
import PropTypes from 'prop-types';
import CTA from './Cta';

const Teaser = ({ title, description, callToAction }) => {
    return (
        <div className="teaser h-screen flex items-center justify-center">
            <div className="cmp-teaser max-w-5xl mx-auto p-6"
          data-cmp-data-layer="">
          <div className="cmp-teaser__content card text-center px-6 py-10">
            {/* Title */}
            <h2 className="cmp-teaser__title text-center lg:text-6xl text-3xl text-black font-bold my-5 leading-[3.5rem] mx-auto">
              {title}
            </h2>

            {/* Description */}
            {description && (
              <p className="cmp-teaser__description text-gray-700 text-lg lg:text-2xl my-6">
                {description}
              </p>
            )}

            {/* Call to Action */}
            {callToAction && (
              <div className="cmp-teaser__action-container mt-6">
                <CTA 
                ctaText={callToAction} 
                ctaLink="#" 
                alignment="center" 
                ctaStyle="primary"
                size="md"
                icon="./vite.svg"
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
