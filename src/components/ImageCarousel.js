import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ImageCarousel.css';

function ImageCarousel() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1200&h=600&fit=crop',
      srcSet:
        'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=480&h=240&fit=crop 480w, ' +
        'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=768&h=384&fit=crop 768w, ' +
        'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=1200&h=600&fit=crop 1200w',
      title: 'World Championship',
      description: 'The most prestigious volleyball competition in the world'
    },
    {
      url: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200&h=600&fit=crop',
      srcSet:
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=480&h=240&fit=crop 480w, ' +
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=768&h=384&fit=crop 768w, ' +
        'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200&h=600&fit=crop 1200w',
      title: 'Olympic Glory',
      description: 'The ultimate prize in international volleyball'
    },
    {
      url: '/images/arena.jpg',
      // Local image: provide fallbacks in srcSet (same file) — replace with multiple sizes on disk if possible
      srcSet: '/images/arena.jpg 480w, /images/arena.jpg 768w, /images/arena.jpg 1200w',
      title: 'Arena Atmosphere',
      description: 'Experience the excitement of live volleyball'
    },
    {
      url: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=1200&h=600&fit=crop',
      srcSet:
        'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=480&h=240&fit=crop 480w, ' +
        'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=768&h=384&fit=crop 768w, ' +
        'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=1200&h=600&fit=crop 1200w',
      title: 'Team Victory',
      description: 'Celebrating success on the court'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'carousel-item active' : 'carousel-item'}
          >
            {index === currentIndex && (
              <>
                <img
                  src={image.url}
                  srcSet={image.srcSet}
                  sizes="(max-width:480px) 480px, (max-width:768px) 768px, 1200px"
                  alt={image.title}
                  decoding="async"
                  loading="eager"
                />
                <div className="carousel-caption">
                  <h2>{image.title}</h2>
                  <p>{image.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <button className="carousel-control prev" onClick={goToPrevious} aria-label="Previous slide">
        <FaChevronLeft />
      </button>
      <button className="carousel-control next" onClick={goToNext} aria-label="Next slide">
        <FaChevronRight />
      </button>

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? 'indicator active' : 'indicator'}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
