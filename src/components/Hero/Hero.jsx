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
            <span className="heading-text tablet">Protect Your Property</span>
            <br />
            <p className="investment">
              Investment with{" "}
              <strong className="text-green-500 font-extrabold">
                Verizone
              </strong>
            </p>
          </h1>

          <p>
            Ensure your investment is safe with comprehensive legal and
            ownership checks.
          </p>

          <button type="button">Login</button>
        </div>

        <div className="hero-images">
          <div className="hero-image"></div>
        </div>
      </div>
      <div className="tablets ">
        <div className="z-[4]">
          <h1>Protect Your Property</h1>
          <h5>
            Investment with <span className="text-green-600">Verizone</span>
          </h5>
          <p>
            Ensure your investment is safe with comprehensive
            <br /> legal and ownership checks.
          </p>
          <button
            type="button"
            className="bg-green-500 text-white hover:bg-green-400 hero-button"
          >
            Register
          </button>
        </div>
        <div>
          <div className="hero-image"></div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
