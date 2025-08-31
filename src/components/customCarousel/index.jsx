import React, { useState } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import styles from './index.module.css';

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    { id: 1, title: 'Slide 1', content: 'First carousel slide content' },
    { id: 2, title: 'Slide 2', content: 'Second carousel slide content' },
    { id: 3, title: 'Slide 3', content: 'Third carousel slide content' }
  ];

  const handlePrev = () => {
    setActiveIndex(prev => prev === 0 ? carouselItems.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setActiveIndex(prev => prev === carouselItems.length - 1 ? 0 : prev + 1);
  };

  return (
    <div className={styles.customCarouselWrapper}>
      <Card className={styles.customCarouselCard}>
        <Card.Body className="p-0 position-relative">

          <Carousel
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            controls={false}
            indicators={false}
            interval={null}
            className={styles.customBootstrapCarousel}
            slide
            touch
          >
            {carouselItems.map(item => (
              <Carousel.Item key={item.id}>
                <div className={styles.slideContent}>
                  <div className={styles.slideIcons}>
                    <img
                      src="src/assets/images/shapes.png"
                      alt="shapes"
                      className={styles.customImg}
                    />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>


          <button
            className={`${styles.carouselInlineBtn} ${styles.carouselInlineBtnPrev}`}
            onClick={handlePrev}
            aria-label="Previous slide"
            title="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
            </svg>
          </button>

          <button
            className={`${styles.carouselInlineBtn} ${styles.carouselInlineBtnNext}`}
            onClick={handleNext}
            aria-label="Next slide"
            title="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
            </svg>
          </button>

          <div className={styles.carouselIndicatorsCustom}>
            {carouselItems.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicatorDot} ${index === activeIndex ? styles.indicatorDotActive : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCarousel;
