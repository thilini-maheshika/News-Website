import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <img src={logo} alt="logo" className="logo"></img>

      <div id="current-date">
        {currentDate.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      
      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`desktopMenu ${isMenuOpen ? "open" : ""}`}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="event"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Events
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact
        </Link>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
