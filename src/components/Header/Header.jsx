import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false); 
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <img src="./Logo.png" alt="Logo" className="logo" />
        <div
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`line ${isOpen ? "active" : ""}`}></span>
          <span className={`line ${isOpen ? "active" : ""}`}></span>
          <span className={`line ${isOpen ? "active" : ""}`}></span>
        </div>
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link
            to="/"
            className="nav-link"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            className="nav-link"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            className="nav-link"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="contact"
            className="nav-link"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          <Link
            to="login"
            className="login-btn"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
