import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";
import { FiMenu, FiX } from "react-icons/fi"; // آیکن همبرگر و ضربدر

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isCircularWorld = location.pathname === "/circular-world";

  // کنترل مخفی/نمایش Navbar هنگام اسکرول
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return; // وقتی منو بازه نوبار ثابت می‌مونه

      const currentScrollY = window.scrollY;
      const threshold = 20;

      if (currentScrollY > lastScrollY + threshold) setShowNavbar(false);
      else if (currentScrollY < lastScrollY - threshold) setShowNavbar(true);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  // قفل اسکرول هنگام باز بودن منو
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <>
      {/* ===== Navbar بالا ===== */}
      <header
        className={`navbar ${showNavbar ? "show" : "hide"} ${
          isCircularWorld ? "navbar-circular" : ""
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

        <div className="navbar-right-desktop">
          <Link to="/">Home</Link>
          <Link to="/circular-world">Circular World</Link>
          <Link to="/digital-journey">Digital Journey</Link>
          <Link to="/electric-future">Electric Future</Link>
          <Link to="/freude">Freude</Link>
          <a href="#">Models</a>
          <button className="search-btn">
            <VscSearch />
          </button>
        </div>

        {/* دکمه همبرگری (فقط در موبایل) */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      {/* ====== منوی موبایل ====== */}
      <nav className={`mobile-menu ${menuOpen ? "show" : "hide"}`}>
        {/* دکمه ضربدر روی منو */}
        <button
          className="mobile-menu-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <FiX />
        </button>

        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/circular-world" onClick={() => setMenuOpen(false)}>
          Circular World
        </Link>
        <Link to="/digital-journey" onClick={() => setMenuOpen(false)}>
          Digital Journey
        </Link>
        <Link to="/electric-future" onClick={() => setMenuOpen(false)}>
          Electric Future
        </Link>
        <Link to="/freude" onClick={() => setMenuOpen(false)}>
          Freude
        </Link>
        <a href="#" onClick={() => setMenuOpen(false)}>
          Models
        </a>
      </nav>
    </>
  );
};

export default Header;
