import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isCircularWorld = location.pathname === "/circular-world";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`navbar ${showNavbar ? "show" : "hide"} ${
        isHome ? "navbar" : isCircularWorld ? "navbar-circular" : ""
      }`}
    >
      <div className="navbar-left">
        <img
          src="./src/assets/images/bmw-logo.png"
          alt="BMW Logo"
          className="logo"
        />
        <div className="divider"></div>
        <span className="slogan">
          Sheer Driving <strong>Pleasure</strong>
        </span>
      </div>
      <nav className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/circular-world">Circular World</Link>
        <Link to="/digital-journey">Digital Journey</Link>
        <Link to="/electric-future">Electric Future</Link>
        <a href="#">Freude</a>
        <a href="#">Models</a>
        <a href="#">
          <span role="img" aria-label="search">
            🔍
          </span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
