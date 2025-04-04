import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import testimonials from "./Testimonials-data.json";
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <div className="testimonial-container">
      <div>
        <h1 className="text-center md:absolute font-bold text-3xl md:text-4xl md:right-[35.3%] ">
          Testimonials
        </h1>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-content">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-text">
                    <div className="testimonial-text-con">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="navigation-container">
            <SamplePrevArrow onClick={() => sliderRef.current.slickPrev()} />
            <SampleNextArrow onClick={() => sliderRef.current.slickNext()} />
          </div>
        </div>
      </div>
    </div>
  );
};

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      <FiArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      <FiArrowLeft />
    </div>
  );
}

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
};

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default Testimonials;
