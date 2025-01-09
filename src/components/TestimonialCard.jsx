import CTA from "./Cta";

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ title, description, image,alignment , cta = false  }) => {
  return (
    <div
      className="teaser group relative sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg group"
      role="region"
      aria-labelledby={`card-title-${title}`}
      aria-describedby={`card-description-${title}`}
    >
      <div className="cmp-teaser__image">
        <img
          src={image}
          alt={`Visual representation of ${title}`}
          className="absolute w-full"
        />
      </div>
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-700 group-hover:bg-opacity-70"
        aria-hidden="true"
      />
      <div className={`cmp-teaser__content text-${alignment} relative z-10 p-4 md:p-5 flex flex-col justify-end h-full `}>
        <h3
          id={`card-title-${title}`}
          className="cmp-teaser__title text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 sm:mb-2"
        >
          {title}
        </h3>
        <div className="opacity-0 -translate-y-[-50%] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <div
          id={`card-description-${title}`}
          className="cmp-teaser__description text-gray-300 text-lg lg:text-2xl"
        >
          {description}
        </div>
        {
          cta &&
          <div className="cta-btn mt-4">
            <CTA ctaText="call to action" />
          </div>
        }
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
