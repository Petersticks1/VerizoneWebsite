import HowData from "../components/How/data.json";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swiper.css";

export default function HowSwiper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Define mobile breakpoint
    };

    // Initial check
    handleResize();

    // Add resize listener
    window.addEventListener("resize", handleResize);

    // Cleanup listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="how-container">
      <section className="how-main-container container-margin">
        <div className="how-title-container">
          <h2 className="how-title">How it works</h2>
          <p>Your Path To Verified Property</p>
        </div>

        {isMobile ? (
          // Mobile View: Swiper
          <Swiper
            slidesPerView={1.4}
            spaceBetween={40}
            loop={true}
            centeredSlides={true}
            // className="mySwiper"
          >
            {HowData.map((data, index) => (
              <SwiperSlide key={index} className="how-card-container">
                <div className="how-card">
                  <div className="how-card-content">
                    <span>{data.index}</span>
                    <h3>{data.header}</h3>
                    <p>{data.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // Desktop View: Static Layout
          <div className="how-card-container">
            {HowData.map((data, index) => (
              <div key={index} className="how-card">
                <div className="how-card-content">
                  <span>{data.index}</span>
                  <h3>{data.header}</h3>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
