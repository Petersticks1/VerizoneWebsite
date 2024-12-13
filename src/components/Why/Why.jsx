import "./Why.css";

const Why = () => {
  return (
    <div className="why-container">
      <div className="why-container-inner">
        <div className="why-container-left">
          <h2>Why Verizone?</h2>
          <p>
            Our expert property verification services are designed to provide
            you with peace of mind, clarity, and protection against potential
            risks. Whether you’re a home buyer, investor, or seller, we’re here
            to help you make confident, informed decisions.
          </p>
          <img src="./Why.png" />
        </div>
        <div className="why-container-right">
          <div>
            <p>To three reasons</p>
            <span>
              why thousands trust us for reliable, accurate, and timely
              verification.
            </span>
          </div>
          <div className="pe-cicrle">
            <div className="div-cicrle">
              <div className="div-cicrle-child-1">
                <img src="./icon1.png" alt="" className="cicrle" />
              </div>
              <div>
                <p>Dispute Check</p>
                <span>
                  Stay ahead of any legal complications. Verify if your property
                  is free of disputes or pending litigation with just a few
                  clicks.
                </span>
              </div>
            </div>

            <div className="div-cicrle">
              <div className="div-cicrle-child-1">
                <img src="./icon2.png" alt="" className="cicrle" />
              </div>
              <div>
                <p>Validation</p>
                <span>
                  Confirm the rightful owner of any property before closing
                  deals. Avoid the costly mistakes of falling for fraudulent
                  claims.
                </span>
              </div>
            </div>
            <div className="div-cicrle">
              <div className="div-cicrle-child">
                <img src="./icon3.png" alt="" className="cicrle" />
              </div>

              <div>
                <p>Authentication</p>
                <span>
                  Authenticate your land titles, certificates of occupancy, and
                  other essential documents quickly and confidently.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
