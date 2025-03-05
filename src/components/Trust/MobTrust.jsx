import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./mobTrust.css";

const MOBTRUST = () => {
  return (
    <div className="mobTrust-container container-margin paddings">
      <div className="trust-1 relative">
        <img src="Hand.png" alt="Why Trust Us" />

        <div className="absolute mb-20 flex justify-start flex-col gap-3">
          <h1 className="text-white text-[48px] font-[700] leading-[59px]">
            Why <br />
            Trust Us
          </h1>
          <p className=" text-white font-[500] text-[16px] leading-[19.5px] ">
            Experience, Accuracy, and Integrity <br />
            in every verification.
          </p>
        </div>
      </div>

      <div className="trust-2 paddings">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          loop={false}
          centeredSlides={true} // Center the current slide
        >
          <SwiperSlide>
            <div className="trust-card-1">
              <h2>Proven Track Record</h2>
              <p>
                With years of experience in property verification, we’ve helped
                thousands of clients make secure and informed real estate
                decisions. Our expertise is trusted by buyers, investors, and
                real estate professionals alike.
              </p>
              <hr />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="trust-card-1">
              <h2>Transparent Reporting</h2>
              <p>
                We believe in full transparency. Our reports are easy to
                understand, providing all findings clearly, along with any
                potential risks so you can make well-informed decisions.
              </p>
              <hr />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="trust-card-1">
              <h2>Industry Certified Experts</h2>
              <p>
                Our team is comprised of certified verification specialists with
                in-depth knowledge of real estate law, title history, and
                property records, ensuring the highest level of service.
              </p>
              <hr />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="trust-card-1">
              <h2>Commitment to Privacy</h2>
              <p>
                We prioritize your privacy and use advanced security protocols
                to protect your information. You can trust us to handle your
                data with the utmost confidentiality and care.
              </p>
              <hr />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MOBTRUST;
