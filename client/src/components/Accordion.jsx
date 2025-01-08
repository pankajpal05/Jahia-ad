import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Accordion = ({ items, singleOpen, defaultOpen,showToggle }) => {
  const [openIndexes, setOpenIndexes] = useState(
    singleOpen
      ? defaultOpen !== null
        ? [defaultOpen]
        : []
      : defaultOpen || []
  );
  const [isAllOpen, setIsAllOpen] = useState(false); // To track the "Open All" or "Close All" state

  const togglePanel = (index) => {
    if (singleOpen) {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    } else {
      setOpenIndexes((prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index)
          : [...prevIndexes, index]
      );
    }
  };

  const toggleAll = () => {
    if (isAllOpen) {
      setOpenIndexes([]); // Close all panels
    } else {
      setOpenIndexes(items.map((_, index) => index)); // Open all panels
    }
    setIsAllOpen(!isAllOpen); // Toggle the "Open All" / "Close All" state
  };

  return (
    <div className="accordion w-full max-w-xl mx-auto">
      <button
        className={`${showToggle ? "block":"hidden" } accordion-toggle-all mb-4 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-400`}
        onClick={toggleAll}
        aria-expanded={isAllOpen}
      >
        {isAllOpen ? 'Close All' : 'Open All'}
      </button>

      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div
            className={`accordion-item mb-2 border rounded-md ${isOpen ? 'bg-gray-100' : 'bg-white'}`}
            key={index}
          >
            <button
              className="accordion-header w-full px-4 py-2 text-left font-medium text-gray-700 focus:outline-none hover:bg-gray-200"
              onClick={() => togglePanel(index)}
              aria-expanded={isOpen}
              aria-controls={`panel-${index}`}
              id={`accordion-header-${index}`}
              tabIndex={0}
            >
              {item.title}
            </button>
            <div
              className={`accordion-panel ${isOpen ? 'block' : 'hidden'} px-4 py-2`}
              id={`panel-${index}`}
              role="region"
              aria-labelledby={`accordion-header-${index}`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  singleOpen: PropTypes.bool,
  defaultOpen: PropTypes.oneOfType([
    PropTypes.number, // Single index if `singleOpen` is true
    PropTypes.arrayOf(PropTypes.number), // Array of indexes if `singleOpen` is false
  ]),
  showToggle: PropTypes.bool,
};

Accordion.defaultProps = {
  // Default items for the accordion
  items: [
    { title: 'Panel 1', content: 'Content for panel 1' },
    { title: 'Panel 2', content: 'Content for panel 2' },
    { title: 'Panel 3', content: 'Content for panel 3' },
  ],
  singleOpen: true,
  defaultOpen: null,
  showToggle:false,
};

export default Accordion;
