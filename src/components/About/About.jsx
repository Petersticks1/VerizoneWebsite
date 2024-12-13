import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./About.css";

const About = () => {
  const statsRef = useRef(null);
  const propertiesRef = useRef(null);
  const complianceRef = useRef(null);
  const customersRef = useRef(null);
  const hasAnimated = useRef(false); 

  useEffect(() => {
    const element = statsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; 
          const duration = 3; 

        
          gsap.to(propertiesRef.current, {
            innerText: 300,
            duration,
            snap: { innerText: 1 }, 
            ease: "power1.inOut",
            onUpdate: function () {
              propertiesRef.current.innerHTML =
                Math.round(this.targets()[0].innerText) + "+";
            },
          });

          gsap.to(complianceRef.current, {
            innerText: 95,
            duration,
            snap: { innerText: 1 },
            ease: "power1.inOut",
            onUpdate: function () {
              complianceRef.current.innerHTML =
                Math.round(this.targets()[0].innerText) + "%";
            },
          });

          gsap.to(customersRef.current, {
            innerText: 70,
            duration,
            snap: { innerText: 1 },
            ease: "power1.inOut",
            onUpdate: function () {
              customersRef.current.innerHTML =
                Math.round(this.targets()[0].innerText) + "+";
            },
          });
        }
      },
      { threshold: 0.5 } 
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="about-main-container container-margin" id="about">
      <div className="about-left">
        <div className="about-image"></div>
      </div>
      <div className="about-right">
        <div className="about-text">
          <p>About Verizon?</p>
          <h2>Secure your property Investment</h2>
          <p className="text">
            Building Trust Through Accuracy, Expertise, and Integrity.
          </p>
        </div>
        <section className="stats-container" ref={statsRef}>
          <p className="stat">
            <span ref={propertiesRef}>0+</span> Verified Properties
          </p>
          <p className="stat">
            <span ref={complianceRef}>0%</span> Compliance Rate
          </p>
          <p className="stat">
            <span ref={customersRef}>0+</span> Satisfied Customers
          </p>
        </section>
        <div className="verizon-logo">
          <img src="./About-logo.png" alt="Verizon logo" />
        </div>
      </div>
    </section>
  );
};

export default About;
