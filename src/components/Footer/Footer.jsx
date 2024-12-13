import data from "./data.json";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-img">
          <img src="/Logo.png" alt="Logo" />
        </div>

        {/* Footer Sections */}
        <div className="footer-sections">
          {Array.isArray(data) ? (
            data.map((section, index) => (
              <div key={index} className="footer-section">
                <h3>{section.header}</h3>

                {/* About Us Section */}
                {section.info && (
                  <div className="footer-item">
                    <img
                      src={section.info.image}
                      alt="Info"
                      className="footer-icon"
                    />
                    <span>{section.info.content}</span>
                  </div>
                )}
                {section.contactNumber && (
                  <div className="footer-item">
                    <img
                      src={section.contactNumber.image}
                      alt="Contact"
                      className="footer-icon"
                    />
                    <span>{section.contactNumber.content}</span>
                  </div>
                )}
                {section.address && (
                  <div className="footer-item">
                    <img
                      src={section.address.image}
                      alt="Address"
                      className="footer-icon"
                    />
                    <span>{section.address.content}</span>
                  </div>
                )}

                {/* Quick Links Section */}
                {section.links && (
                  <ul className="footer-links">
                    {section.links.map((link, idx) => (
                      <li key={idx}>{link}</li>
                    ))}
                  </ul>
                )}

                {/* Social Media Section */}
                {section.socialMedia && (
                  <div className="footer-social-media">
                    {Object.entries(section.socialMedia).map(
                      ([platform, info], idx) => (
                        <div key={idx} className="footer-item">
                          {info.image && (
                            <img
                              src={info.image}
                              alt={platform}
                              className="footer-icon"
                            />
                          )}
                          <span>{platform}</span>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* Policies Section */}
                {section.policies && (
                  <ul className="footer-policies">
                    {section.policies.map((policy, idx) => (
                      <li key={idx}>{policy}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <p>Error: Data is not an array</p>
          )}
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <div className="footer-left">
            <p>Subscribe to our Newsletter</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; Verizone Inc Service. All rights reserved.
          </div>
          <div>
            <hr className="hr" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
