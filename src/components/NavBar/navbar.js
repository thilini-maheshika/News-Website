import React, { useState, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import CNNLogo from '../../assets/cnnlogo.png';
import NBCLogo from '../../assets/nbc.png';
import FoxLogo from '../../assets/fox.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

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
      <div>
        <h4 className="links">
            <img src={CNNLogo} alt="CNN" className="link" />
            <img src={NBCLogo} alt="NBC" className="link" />
            <img src={FoxLogo} alt="Fox" className="link" />
        </h4>
      </div>
    </nav>
  );
};

export default Navbar;
