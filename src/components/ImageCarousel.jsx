import React, { useState, useEffect } from 'react';

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <div 
      className="carousel"
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="region"
      aria-label="Image carousel"
    >
      <div className="carousel-container">
        <button 
          className="carousel-button prev"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ❮
        </button>
        
        <div className="carousel-content">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              aria-hidden={index !== currentIndex}
            >
              <img 
                src={image.url} 
                alt={image.description}
                className="carousel-image"
              />
              <div className="carousel-caption">
                {image.description}
              </div>
            </div>
          ))}
        </div>

        <button 
          className="carousel-button next"
          onClick={goToNext}
          aria-label="Next image"
        >
          ❯
        </button>
      </div>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;