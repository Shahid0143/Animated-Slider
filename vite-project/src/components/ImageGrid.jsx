import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./ImageGrid.css";

const ImageGrid = () => {
  const [sliderRef1, instanceRef1] = useKeenSlider({
    slidesPerView: 1,
    loop: true,
    mode: "snap",
    duration: 1000,
  });

  const [sliderRef2, instanceRef2] = useKeenSlider({
    slidesPerView: 1,
    loop: true,
    mode: "snap",
    duration: 1000,
  });

  const [sliderRef3, instanceRef3] = useKeenSlider({
    slidesPerView: 1,
    loop: true,
    mode: "snap",
    duration: 1000,
  });

  return (
    <div className="grid-container">
      <div className="grid-column">
        <div ref={sliderRef1} className="keen-slider">
          <button
            className="arrow left-arrow"
            onClick={() => instanceRef1.current.prev()}
          >
            &larr;
          </button>
          <div className="keen-slider__slide">
            <img
              src="https://img.freepik.com/premium-photo/depiction-artificial-intelligence-as-human_772785-9836.jpg"
              alt="Image 1"
            />
          </div>
          <div className="keen-slider__slide">
            <img
              src="https://img.freepik.com/premium-photo/future-artificial-intelligence_553012-12734.jpg"
              alt="Image 2"
            />
          </div>
          <div className="keen-slider__slide">
            <img
              src="https://img.freepik.com/premium-photo/artificial-global_1071881-1158.jpg"
              alt="Image 3"
            />
          </div>
        </div>
      </div>
      <div className="grid-column">
        <div ref={sliderRef2} className="keen-slider">
          <button
            className="arrow left-arrow"
            onClick={() => instanceRef2.current.prev()}
          >
            &larr;
          </button>
          <div className="keen-slider__slide">
            <img
              src="https://img.freepik.com/premium-photo/portrait-girl-with-artificial-intelligence-with-abstract-background-space-science_700081-85.jpg"
              alt="Image 4"
            />
          </div>
          <div className="keen-slider__slide">
            <img
              src="https://img.freepik.com/premium-photo/artistic-expressions-born-from-technological-imperfections_889056-21790.jpg"
              alt="Image 5"
            />
          </div>
          <div className="keen-slider__slide">
            <img
              src="https://img.freepik.com/premium-photo/power-art-illuminating-beauty-creativity-within-us_1015980-80685.jpg"
              alt="Image 6"
            />
          </div>
        </div>
      </div>
      <div className="grid-column">
        <div ref={sliderRef3} className="keen-slider">
          <button
            className="arrow left-arrow"
            onClick={() => instanceRef3.current.prev()}
          >
            &larr;
          </button>
          <div className="keen-slider__slide">
            <img
              src="https://img.freepik.com/premium-photo/illustration-woman-abstract-art-ai-generated_57312-1762.jpg"
              alt="Image 7"
            />
          </div>
          <div className="keen-slider__slide">
            <img
              src="https://img.freepik.com/premium-photo/illustration-woman-abstract-art-ai-generated_57312-1803.jpg"
              alt="Image 8"
            />
          </div>
          <div className="keen-slider__slide">
            <img
              src="https://img.freepik.com/premium-photo/illustration-woman-abstract-art-ai-generated_57312-1807.jpg"
              alt="Image 9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
