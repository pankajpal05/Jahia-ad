import React from 'react';
import PropTypes from 'prop-types';

const Teaser = ({ title, description, cta }) => {
    return (
        <div className="teaser h-screen flex items-center justify-center">
            <div className='cmp-teaser' data-cmp-data-layer="">
                <div className="cmp-teaser__content card text-center px-5 py-10 ">
                    {/* title */}
                    <h2 className="cmp-teaser__title text-center lg:text-6xl text-3xl text-black font-bold my-5 lg:max-w-[60%] leading-[3.5rem] mx-auto">
                        {title}
                    </h2>

                    {description && (
                        <div className='cmp-teaser__description'>
                            <p className="text-gray-700 lg:text-2xl text-lg my-8">{description}</p>
                        </div>
                    )}
                    <div className='cmp-teaser__action-container'>
                        <a href='#' data-cmp-data-layer="" className="cmp-teaser__action-link bg-black text-white lg:px-8 px-6 lg:py-4 py-2 rounded-lg text-lg hover:bg-gray-800 transition-all">
                            {cta}
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

// Default Props
Teaser.defaultProps = {
    title: 'Welcome to the Teaser Component!',
    description: 'A compelling description goes here',
    cta: 'Get Started',
};

// Prop Types
Teaser.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    cta: PropTypes.string.isRequired,
};

export default Teaser;
