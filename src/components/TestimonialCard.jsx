// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ title, description, image }) => {
  return (
    <div
      className="teaser relative w-full sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg group"
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
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-70"
        aria-hidden="true"
      ></div>
      <div className="cmp-teaser__content relative z-10 p-4 md:p-5 flex flex-col justify-end h-full">
        <h3
          id={`card-title-${title}`}
          className="cmp-teaser__title text-lg sm:text-xl md:text-2xl font-semibold text-white mb-1 sm:mb-2"
        >
          {title}
        </h3>
        <p
          id={`card-description-${title}`}
          className="cmp-teaser__description text-xs sm:text-sm md:text-base text-white opacity-90"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
