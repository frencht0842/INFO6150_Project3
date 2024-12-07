import React, { useState } from 'react';

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleItem(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            {item.title}
            <span className="accordion-icon">
              {activeIndex === index ? '−' : '+'}
            </span>
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`accordion-content ${activeIndex === index ? 'active' : ''}`}
            aria-hidden={activeIndex !== index}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;