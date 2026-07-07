import React, { useState } from "react";
import styles from "./carousel.module.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <>
      <div className={`${styles.carouselContainer} flex flex-col gap-1r`}>
        <div className={`${styles.carouselTrack} flex transition-a-05s-linear`} style={{ transform: `translateX(-${currentIndex * 100}%)` }} >
            {images.map((url, index) => (
                <div key={index} className={`${styles.carouselSlide} w-full flex items-center justify-center`}>
                    <img src={url} alt={`Slide ${index + 1}`} className={`${styles.carouselImage} pointer-events-none`} />
                </div>
            ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-0-5r">
            <button className={`flex items-center justify-center bg-light-blue border-none rounded-full p-0-5r transition-a-03s-linear`} onClick={handlePrev} aria-label="Previous Slide">
                <img src="assets/icons/chevron-left.svg" alt="" />
            </button>
            <button className={`flex items-center justify-center bg-light-blue border-none rounded-full p-0-5r transition-a-03s-linear`} onClick={handleNext} aria-label="Next Slide">
                <img src="assets/icons/chevron-right.svg" alt="" />
            </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
