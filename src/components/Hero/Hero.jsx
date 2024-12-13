import "./Hero.css";

const Hero = () => {
  return (
    <main className="hero-main-container container-margin">
      <div className="hero-container" id="/">
        <div className="hero-text">
          <h1>
            <span className="heading-text desktop">
              Verify <br /> Your Property
            </span>{" "}
            <span className="heading-text mobile">
              Protect <br /> Your Property
            </span>
            <br />
            Investment with <span className="green">Verizone</span>
          </h1>
          <p>
            Ensure your investment is safe with comprehensive legal and
            ownership checks.
          </p>

          <button type="button">Register</button>
        </div>

        <div className="hero-image"></div>
      </div>
    </main>
  );
};

export default Hero;
