import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './index.css';

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    { id: 1, title: 'Slide 1', content: 'First carousel slide content' },
    { id: 2, title: 'Slide 2', content: 'Second carousel slide content' },
    { id: 3, title: 'Slide 3', content: 'Third carousel slide content' }
  ];

  const handleSelect = (selectedIndex) => setActiveIndex(selectedIndex);

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className="custom-carousel-wrapper">
      <Card className="custom-carousel-card">
        <Card.Body className="p-0 position-relative">

          <Carousel
            activeIndex={activeIndex}
            onSelect={handleSelect}
            controls={false}
            indicators={false}
            interval={null}
            className="custom-bootstrap-carousel"
            slide={true}
            touch={true}
          >
            {carouselItems.map(item => (
              <Carousel.Item key={item.id} className="carousel-slide">
                <div className="slide-content d-flex flex-column align-items-center justify-content-center">
                  <div className="slide-icons m-0">
                    <img src="src/assets/images/shapes.png" alt="shapes" className="custom-img" />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          {/* Inline overlay buttons */}
          <button
            className="carousel-inline-btn carousel-inline-btn--prev"
            onClick={handlePrev}
            aria-label="Previous slide"
            title="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16" aria-hidden>
              <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
            </svg>
          </button>

          <button
            className="carousel-inline-btn carousel-inline-btn--next "
            onClick={handleNext}
            aria-label="Next slide"
            title="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16" aria-hidden>
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
            </svg>
          </button>

          {/* Dot Indicators (kept below overlay if needed) */}
          <div className="carousel-indicators-custom d-flex justify-content-center">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                title={`Slide ${index + 1}`}
              />
            ))}
          </div>

        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCarousel;
